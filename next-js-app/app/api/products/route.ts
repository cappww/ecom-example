import { NextResponse } from "next/server";
import { Client, types } from "pg";

// Set custom type parsers for numeric types
types.setTypeParser(types.builtins.NUMERIC, (val) => parseFloat(val));
types.setTypeParser(types.builtins.FLOAT8, (val) => parseFloat(val));
types.setTypeParser(types.builtins.INT8, (val) => parseInt(val, 10));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "9");
  const search = searchParams.get("search") || "";

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    ssl:
      process.env.APP_ENV === "production"
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
  });

  try {
    await client.connect();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  try {
    const query = `
    SELECT * FROM products
    WHERE name ILIKE $1 OR description ILIKE $1
    LIMIT $2 OFFSET $3
  `;
    const values = [`%${search}%`, limit, (page - 1) * limit];

    const res = await client.query(query, values);
    const totalQuery = `
    SELECT COUNT(*) FROM products
    WHERE name ILIKE $1 OR description ILIKE $1
  `;
    const totalRes = await client.query(totalQuery, [`%${search}%`]);

    const totalProducts = parseInt(totalRes.rows[0].count, 10);

    return NextResponse.json({
      products: res.rows,
      totalProducts: totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    console.error("Query execution failed:", error);
    return NextResponse.json(
      { error: "Query execution failed" },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
