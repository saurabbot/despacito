import React, { FC } from "react";
import { useRouter } from "next/router";
interface Props {}
const Menubar: FC<Props> = (props: Props) => {
  const router = useRouter();
  type ImageIconProps = {
    src: string;
    link: string;
  };
  const ImageIcon: FC<ImageIconProps> = (props: ImageIconProps) => {
    return (
      <span
        className=" cursor-pointer hover:-translate-y-2  duration-500"
        onClick={() => {
          router.push(props.link);
        }}
      >
        <img src={props.src} className="w-10 h-10 " />
      </span>
    );
  };
  return (
    <div className="flex h-1/2 p-3 rounded-full m-1 border-[0.5px]  flex-col justify-evenly">
      <ImageIcon
        src="https://img.icons8.com/?size=100&id=JtOasgwoFNyW&format=png"
        link="/employer"
      />
      <ImageIcon
        src="https://img.icons8.com/?size=60&id=102261&format=png"
        link="/employer/"
      />
      <ImageIcon
        src="https://img.icons8.com/?size=160&id=l9Bm3496jiWO&format=png"
        link="/employer/jobs"
      />
    </div>
  );
};
export default Menubar;
