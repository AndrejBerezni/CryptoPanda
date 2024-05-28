import { ICoinDetailed } from '../../compiler/interfaces'

export default function CoinCardTitle({
  coin,
  position,
}: {
  coin: ICoinDetailed
  position: number
}) {
  return (
    <>
      <p className="rounded-full sm:rounded-none p-1 sm:bg-transparent dark:bg-secondary sm:shadow-none dark:sm:bg-transparent sm:text-textColor dark:sm:text-textColorDark bg-primary aspect-square flex items-center shadow-md justify-center text-backgroundColor dark:text-backgroundColorDark font-bold text-xl self-start sm:self-center">
        {position}
        <span className="hidden sm:block">.</span>
      </p>
      <img src={coin.image} alt={coin.name} className="h-[40px] w-[40px]" />
      <h2 className="text-accent dark:text-secondary font-bold sm:w-1/4 text-center sm:text-start">
        {coin.symbol.toUpperCase()} - {coin.name}
      </h2>
    </>
  )
}
