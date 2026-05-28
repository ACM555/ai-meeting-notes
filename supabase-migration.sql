-- 留言板表
-- 在 Supabase SQL Editor 中运行此脚本

-- 1. 创建 messages 表
CREATE TABLE IF NOT EXISTS messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 启用行级安全
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 3. 允许匿名用户插入数据（提交留言）
CREATE POLICY "允许匿名提交留言"
ON messages FOR INSERT
TO anon
WITH CHECK (true);

-- 4. 只允许认证用户读取（你自己在 Supabase Dashboard 查看）
CREATE POLICY "允许认证用户读取"
ON messages FOR SELECT
TO authenticated
USING (true);
