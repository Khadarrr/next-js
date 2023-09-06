import { NextResponse } from "next/server";

// Sample data (replace this with your actual data)
let posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
];

export async function GET(request) {
  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(request) {
  try {
    const newPost = await request.json();

    // Generate a unique ID for the new post
    newPost.id = posts.length + 1;

    // Add the new post to the posts array
    posts.push(newPost);

    return NextResponse.json({ message: 'Post created successfully', post: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }
}

export async function PUT(request) {
  const { id } = request.query;
  const updatedPost = await request.json();

  const index = posts.findIndex(post => post.id === parseInt(id));

  if (index !== -1) {
    // Update the existing post
    posts[index] = { ...posts[index], ...updatedPost };
    return NextResponse.json({ message: 'Post updated successfully', post: posts[index] }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}

export async function DELETE(request) {
  const { id } = request.query;

  const index = posts.findIndex(post => post.id === parseInt(id));

  if (index !== -1) {
    // Remove the post
    posts.splice(index, 1);
    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
