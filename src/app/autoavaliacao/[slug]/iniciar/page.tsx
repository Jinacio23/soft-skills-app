import quizzes from "../../../quizzes.json";
import { redirect } from "next/navigation";
import Client from "./client";


/*
  Não consegui pensar num jeito melhor de alterar
  o metadata da página e passar o quiz dinamicamente
  ao client dando fetch uma vez só.
*/

// Pré-renderização estática de caminhos dinâmicos, necessário para deploy no github pages
export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

// Alterar metadata da página dinamicamente
export async function generateMetadata({
  params,
}: Readonly<{ params: { slug: string } }>) {
  // Busca o quiz pelo slug
  const quiz = quizzes.find((c: any) => c.slug === params.slug);
  return {
    title: quiz?.title + " | Soft Skills Check",
  }
}

export default function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const quiz = quizzes.find((c: any) => c.slug === params.slug);

  if (!quiz) return redirect("/");

  return <Client quiz={quiz} />
}
