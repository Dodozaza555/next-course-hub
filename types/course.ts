export type CourseStatus = "not_started" | "in_progress" | "completed";

export type Course = {
  id: string;
  code: string;
  name: string;
  credit: number;
  instructor: string;
  status: CourseStatus;
};

export type CourseDraft = {
  code: string;
  name: string;
  credit: string;
  instructor: string;
  status: CourseStatus;
};