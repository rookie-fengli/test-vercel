import { NextResponse, type NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, string | string | undefined[]> },
) {
  try {
    const result = await sql`select * from life_classify;`;
    return NextResponse.json({ result }).headers.set('Access-Control-Allow-Credentials', 'true');
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Record<string, string | string | undefined[]> },
) {
  try {
    const result = await sql`insert into life_classify 
    (classify_id,classify_name,classify_summary,superior_id,is_enable) 
    VALUES 
    (1,'主页','主页',0,1),
    (2,'前端','前端',0,1),
    (3,'后端','后端',0,1),
    (4,'UI','UI',0,1),
    (5,'系统','系统',0,1),
    (6,'个人','个人',0,1);`;
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Record<string, string | string | undefined[]> },
) {
  try {
    const result = await sql`CREATE TABLE life_classify (
      classify_id int NOT NULL ,
      classify_name varchar(255) NOT NULL ,
      classify_summary varchar(255) NOT NULL ,
      superior_id int NOT NULL ,
      is_enable int NOT NULL 
    );
    COMMENT ON TABLE "life_classify" IS '一级分类表';
    COMMENT ON COLUMN "life_classify"."classify_id" IS '分类ID';
    COMMENT ON COLUMN "life_classify"."classify_name" IS '分类名称';
    COMMENT ON COLUMN "life_classify"."classify_summary" IS '分类描述';
    COMMENT ON COLUMN "life_classify"."superior_id" IS '上级ID';
    COMMENT ON COLUMN "life_classify"."is_enable" IS '是否启用';`;
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
