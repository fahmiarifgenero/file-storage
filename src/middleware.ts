import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // make public routes accessible without authentication
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
