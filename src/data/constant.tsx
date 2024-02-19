import { Gift } from '@/assets'

const VOUCHER_300: string = 'Voucher 300.000đ';
const VOUCHER_600: string = 'Voucher 600.000đ';
const VOUCHER_900: string = 'Voucher 900.000đ';

export const PRIZES = [
  {
    name: VOUCHER_300, // 1
    img: Gift,
    level: 1,
    percentpage: 60
  },
  {
    name: VOUCHER_900, // 2
    img: Gift,
    level: 11,
    percentpage: 55
  },
  {
    name: VOUCHER_300, // 3
    img: Gift,
    level: 1,
    percentpage: 10
  },
  {
    name: VOUCHER_600, // 4
    img: Gift,
    level: 2,
    percentpage: 25
  },
  {
    name: VOUCHER_300, // 5
    img: Gift,
    level: 1,
    percentpage: 80
  },
  {
    name: VOUCHER_900, // 6
    img: Gift,
    level: 10,
    percentpage: 39
  },
  {
    name: VOUCHER_300, // 7
    img: Gift,
    level: 1,
    percentpage: 40
  },
  {
    name: VOUCHER_600, // 8
    img: Gift,
    level: 8,
    percentpage: 5
  }
]

export const COLORS = {
  primary_first: '#363229',
  primary_second: '#d9be82',
  wheel_stroke: '#d9be82',
  wheel_item_line: '#363229',
  wheel_item: '#d9260b',
  wheel_cycle: '#d9be82',
  wheel_pin_button: '#363229',
  text: '#363229'
}
