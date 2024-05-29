export default function CoinNameSymbolLogo({
  name,
  symbol,
  image,
}: Readonly<{
  name: string
  symbol: string
  image: string
}>) {
  return (
    <div className="flex self-center sm:self-start gap-4 sm:gap-8">
      <img
        src={image}
        alt={`${name}-logo`}
        className="w-[100px] h-[100px] lg:h-[150px] lg:w-[150px]"
      />
      <div>
        <h1 className="text-[50px] lg:text-[75px] font-extrabold uppercase tracking-wider">
          {symbol}
        </h1>
        <h1 className="uppercase font-extrabold tracking-wider text-[18px] lg:text-[27px] text-primary dark:text-secondary font-source">
          {name}
        </h1>
      </div>
    </div>
  )
}
