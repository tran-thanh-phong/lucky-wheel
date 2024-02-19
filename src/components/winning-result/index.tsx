import { COLORS } from '@/data/constant'
import './style.css'
import { Logo } from '@/assets'

type Props = {
  winningResult: { name: string; img: string }
  handleContinue: () => void
}

const WinningResult = ({ winningResult, handleContinue }: Props) => {
  return (
    <div className='modal-container flex flex-col justify-center items-center gap-2 py-4 px-5 bg-white rounded-lg'>
      <img src={Logo} style={{maxWidth: '100px'}} className='w-[30%]' />

      <span className={`text-lg font-bold text-[${COLORS.text}]`}>Chúc mừng</span>
      <span className={`text-lg font-bold text-[${COLORS.text}]`}>Phần thưởng của bạn là</span>
      
      <br/>

      <img src={winningResult.img} className='w-[25%] object-cover' />
      <span 
        className={`text-2xl font-bold text-[${COLORS.wheel_item}]`}
        style={{color: `${COLORS.wheel_item}`}}
      >{winningResult.name}</span>
      
      <br/>

      <div className='flex justify-around items-center xs:gap-5 md:gap-10 mb-3'>
        <button
          className={`px-10 xs:px-3 text-md xs:text-sm py-2 border-[1.5px] rounded-full border-[${COLORS.primary_second}] hover:border-[${COLORS.primary_first}] text-[${COLORS.primary_first}] hover:text-[${COLORS.primary_second}] transition-all ease-in-out duration-150`}
          onClick={handleContinue}
        >
          Trang chủ
        </button>
        <button
          className={`px-6 py-2 text-md xs:text-sm rounded-full bg-[${COLORS.primary_second}] text-white hover:bg-[${COLORS.primary_second}] transition-all ease-in-out duration-150`}
          style={{background: `${COLORS.primary_second}`}}
          onClick={handleContinue}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  )
}

export default WinningResult
