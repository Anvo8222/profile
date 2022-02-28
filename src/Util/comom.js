export function fortmatPrice(price){
    return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}