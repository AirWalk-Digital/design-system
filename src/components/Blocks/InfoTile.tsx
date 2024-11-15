import React from 'react';

interface InfoTileProps {
    slug: string;
    mainImage: string;
    excerpt: string;
    title: string;
    }

export function InfoTile(props: InfoTileProps) {
  const { slug, mainImage, excerpt, title } = props;
  return (

            <div
              key={slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {mainImage && (
                <img
                  alt={title || ''}
                  src={mainImage}
                  className="aspect-[3/2] w-full rounded-2xl object-cover w-px1170 h-pc780"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                {/* <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div> */}
                <div className="mt-2 text-base/7 font-medium">
                  <a href={`/blog/${slug}`}>
                    <span className="absolute inset-0" />
                    {title}
                  </a>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {excerpt}
                </div>
                {/* {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          );

}