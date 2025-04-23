import { NextResponse } from 'next/server';
import type { Resource } from '@/app/learning-path/types';

// Sample data - in a real app, this would come from a database
const resources: Resource[] = [
  {
    id: "res-1",
    title: "Python for Data Science",
    provider: "DataCamp",
    type: "course",
    duration: "40 hours",
    difficulty: "Intermediate",
    rating: 4.5,
    cost: "$49/month",
    url: "https://datacamp.com/python-data-science",
    description: "Comprehensive course covering Python fundamentals for data science"
  },
  // Add more sample resources here
];

export async function GET() {
  try {
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const resource = await request.json();
    // In a real app, validate and save to database
    resources.push(resource);
    return NextResponse.json(resource);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    );
  }
}
