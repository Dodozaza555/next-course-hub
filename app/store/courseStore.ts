import { create } from "zustand";
import type { Course, CourseDraft, CourseStatus } from "../../types/course";

export type CourseFilter = "all" | CourseStatus;

type CourseStore = {
  courses: Course[];
  keyword: string;
  statusFilter: CourseFilter;
  pendingDeleteId: string | null;
  setCourses: (courses: Course[]) => void;
  setKeyword: (keyword: string) => void;
  setStatusFilter: (status: CourseFilter) => void;
  setPendingDeleteId: (id: string | null) => void;
  addCourse: (draft: CourseDraft) => void;
  updateCourse: (id: string, draft: CourseDraft) => void;
  deleteCourse: (id: string) => void;
  updateCourseStatus: (id: string, status: CourseStatus) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  keyword: "",
  statusFilter: "all",
  pendingDeleteId: null,
  setCourses: (courses) => set({ courses }),
  setKeyword: (keyword) => set({ keyword }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setPendingDeleteId: (pendingDeleteId) => set({ pendingDeleteId }),
  addCourse: (draft) =>
    set((state) => ({
      courses: [
        ...state.courses,
        {
          id: crypto.randomUUID(),
          code: draft.code.trim(),
          name: draft.name.trim(),
          credit: Number(draft.credit),
          instructor: draft.instructor.trim(),
          status: draft.status,
        },
      ],
    })),
  updateCourse: (id, draft) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id
          ? {
              ...course,
              code: draft.code.trim(),
              name: draft.name.trim(),
              credit: Number(draft.credit),
              instructor: draft.instructor.trim(),
              status: draft.status,
            }
          : course
      ),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== id),
      pendingDeleteId: state.pendingDeleteId === id ? null : state.pendingDeleteId,
    })),
  updateCourseStatus: (id, status) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, status } : course
      ),
    })),
}));
