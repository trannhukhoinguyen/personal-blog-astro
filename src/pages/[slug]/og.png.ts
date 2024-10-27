import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "../../utils/generateOgImage";

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  return posts.map(post => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  try {
    const image = await generateOgImageForPost(
      props as CollectionEntry<"blog">
    );

    return new Response(image, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.log({ error });

    return new Response(
      JSON.stringify({ message: "Failed to generate OG image" })
    );
  }
};
