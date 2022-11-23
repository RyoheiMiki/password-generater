function App() {
  const BASE_STR = "abcdefghijklmnopqrstuvwxyz";
  const NUMS = "0123456789";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SYMBOL = "_/$?!&#@%*";

  // 参考： https://chaika.hatenablog.com/entry/2022/01/30/083000
  const getRandomString = (str: string, len: number): string => {
    // const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    return Array.from(crypto.getRandomValues(new Uint32Array(len)))
      .map((v) => str[v % str.length])
      .join("");
  };

  const onClickGenerate = () => {
    const s = BASE_STR + SYMBOL;
    const r = getRandomString(s, 16);
    console.log(r);
  };

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
                  value="bE-RO$lNL2hipR37R+Pan$c"
                  className="bg-transparent border-solid outline outline-1 p-4"
                />
                butt
              </div>
              <button
                onClick={onClickGenerate}
                className="outline outline-1 p-4"
              >
                パスワード再生成
              </button>
              <button className="outline outline-1 p-4">
                パスワードをコピーする
              </button>
            </div>
          </div>
          <section>
            <div></div>
          </section>
          <section>
            <h2>Author</h2>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
