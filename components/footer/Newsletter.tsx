import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  content: HTML;
}

function Newsletter({ title, content }: Props) {
  return (
    <div class="container-fluid bg-[#262628]">
      <div class="
        md:flex
        xs:block

        m-auto
        py-10
        text-[#f3f3f3]
        
        lg:w-[1052px]
      ">
        <div class="
          md:w-2/4
          xs:w-11/12

          ml-5
        ">
          <h2
            class="font-AvenirNextLTPro font-bold text-[28px]"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <p
            class="my-4 [&>a]:text-[#f26f21] text-[14px]"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </p>
        </div>
        <div class="
          lg:ml-5
          md:ml-8
          md:my-0

          lg:w-2/4
          md:w-2/5
          xs:w-10/12

          xs:my-8
          xs:m-auto
        ">
          <div>
            <span class="font-bold">Name</span>
            <input
              class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"
              placeholder="Type your name"
              type="text"
            />
          </div>
          <div class="my-5">
            <span class="font-bold">Email*</span>
            <input
              class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"
              placeholder="your@email.com"
              type="email"
            />
          </div>

          <button class="uppercase bg-[#f26f21] text-white rounded-sm text-[14px] cursor-pointer p-2">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
