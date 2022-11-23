import { ChangeEvent, useEffect, useState } from "react";

const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert("コピーに失敗しました");
  }
};

// 参考： https://chaika.hatenablog.com/entry/2022/01/30/083000
const getRandomString = (str: string, len: number): string => {
  return Array.from(crypto.getRandomValues(new Uint32Array(len)))
    .map((v) => str[v % str.length])
    .join("");
};

function App() {
  const [password, setPassword] = useState("");
  const [isIncludeNums, setIsIncludeNums] = useState(false);
  const [isIncludeUppercase, setIsIncludeUppercase] = useState(false);
  const [isIncludeSymbol, setIsIncludeSymbol] = useState(false);
  const [passwordLen, setPasswordLen] = useState(8);

  const BASE_STR = "abcdefghijklmnopqrstuvwxyz";
  const NUMS = "0123456789";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SYMBOL = "_/$?!&#@%*";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "uppercase":
        setIsIncludeUppercase(!isIncludeUppercase);
      case "number":
        setIsIncludeNums(!isIncludeNums);
      case "symbol":
        setIsIncludeSymbol(!isIncludeSymbol);
      default:
        return;
    }
  };

  const onClickGenerate = () => {
    const s = `${BASE_STR}${isIncludeNums ? NUMS : ""}${
      isIncludeUppercase ? UPPERCASE : ""
    }${isIncludeSymbol ? SYMBOL : ""}`;

    const r = getRandomString(s, passwordLen);
    setPassword(r);
  };

  useEffect(() => {
    const s = getRandomString(BASE_STR, 8);
    setPassword(s);
  }, []);

  return (
    <>
      <div className="container min-h-screen p-6">
        <div className="flex">
          <div>
            <h1 className="text-3xl tracking-widest">Password generater</h1>
            <p>パスーワードの生成を簡単に行うことができます。</p>
            <div>
              <div>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength={36}
                  className="w-96 text-center bg-transparent border-solid outline outline-1 p-4"
                />
              </div>
              <label
                htmlFor="password-len"
                className="ml-4 text-lg dark:text-gray-300 cursor-pointer mr-6"
              >
                パスワードの長さ
              </label>
              <input
                id="password-len"
                type="number"
                value={passwordLen}
                onChange={(e) => setPasswordLen(Number(e.target.value))}
                maxLength={2}
                max={36}
                min={8}
                className="w-20 text-center bg-transparent border-solid outline outline-1 p-4"
              />

              <div>
                <div className="flex items-center mb-4">
                  <div className="border">
                    <input
                      id="include-uppercase-checkbox"
                      type="checkbox"
                      value="uppercase"
                      onChange={(e) => handleChange(e)}
                      className="w-8 h-8 appearance-none bg-transparent text-transparent border-transparent outline focus:ring-offset-0 focus:ring-0 cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="include-uppercase-checkbox"
                    className="ml-4 text-lg dark:text-gray-300 cursor-pointer"
                  >
                    大文字を含める
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <div className="border">
                    <input
                      id="include-number-checkbox"
                      type="checkbox"
                      value="number"
                      onChange={(e) => handleChange(e)}
                      className="w-8 h-8 appearance-none bg-transparent text-transparent border-transparent outline focus:ring-offset-0 focus:ring-0 cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="include-number-checkbox"
                    className="ml-4 text-lg dark:text-gray-300 cursor-pointer"
                  >
                    数字を含める
                  </label>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="border">
                  <input
                    id="include-symbol-checkbox"
                    type="checkbox"
                    value="symbol"
                    onChange={(e) => handleChange(e)}
                    className="w-8 h-8 appearance-none bg-transparent text-transparent border-transparent outline focus:ring-offset-0 focus:ring-0 cursor-pointer"
                  />
                </div>
                <label
                  htmlFor="include-symbol-checkbox"
                  className="ml-4 text-lg dark:text-gray-300 cursor-pointer"
                >
                  記号を含める
                </label>
              </div>
              <button
                onClick={onClickGenerate}
                className="outline outline-1 p-4"
              >
                パスワード再生成
              </button>
              <button
                onClick={() => copyTextToClipboard(password)}
                className="outline outline-1 p-4"
              >
                パスワードをコピーする
              </button>
            </div>
          </div>
          <section>
            <div></div>
          </section>
          <section></section>
        </div>
      </div>
    </>
  );
}

export default App;
