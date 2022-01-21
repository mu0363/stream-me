import { useEffect } from "react";
import { play } from "src/playground";

export default function Home() {
  useEffect(() => {
    play();
  }, []);

  function foo<T>(arg: T) {
    return { value: arg };
  }

  const foo1 = foo<number[]>([2, 1, 3]);

  return (
    <div>
      <div className="text-2xl text-red-500 bg-black">hello world</div>
    </div>
  );
}
