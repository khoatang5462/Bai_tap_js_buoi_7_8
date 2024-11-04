let mang = []
function themSo() {
  const soNguyen = Number(document.getElementById("soNguyen").value);
  if (true) {
    mang.push(soNguyen);
    document.getElementById("mangSo").innerText = mang.join(", ");
    document.getElementById("soNguyen").value = "";
  }
}
//1
function tongSoDuong() {
  const tong = mang.filter(num => num > 0).reduce((i, num) => i + num, 0)
  document.getElementById('ketQua').innerText = tong
}
//2
function demSoDuong() {
  const dem = mang.filter(num => num > 0).length
  document.getElementById('ketQua').innerText = dem
}
//3
function soNhoNhat() {
  const min = Math.min(...mang)
  document.getElementById('ketQua').innerText = min

}
//4
function soDuongNhoNhat() {
  const soDuong = mang.filter(num => num > 0)
  const nhoNhat = soDuong.length ? Math.min(...soDuong) : "Không có số dương "
  document.getElementById('ketQua').innerText = nhoNhat
}
//5
function soChanCuoiCung() {
  const even = mang.filter(num => num % 2 === 0)
  const last = even.length ? even[even.length - 1] : -1
  document.getElementById('ketQua').innerText = last

}
//6
function doiCho() {
  const viTri1 = prompt("Vị trí 1");
  const viTri2 = prompt("Vị trí 2");

  if (viTri1 > 0 && viTri2 > 0 && viTri1 <= mang.length && viTri2 <= mang.length) {
    [mang[viTri1 - 1], mang[viTri2 - 1]] = [mang[viTri2 - 1], mang[viTri1 - 1]];
    document.getElementById("ketQua").innerText = mang;
  }
}

//7
function tangDan() {
  mang.sort((a, b) => a - b)
  document.getElementById('ketQua').innerText = mang
}

//8
function soNguyenToDauTien() {
  const checkSNT = num => {
    if (num < 2) return false
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false

    } 
    return true
  }
  const soDauTien = mang.find(num => checkSNT(num))
  document.getElementById('ketQua').innerText = ` ${soDauTien !== undefined ? soDauTien : -1}`
}

//9
function demSoNguyen(){
  const mangThuc = mang.filter(num => Number.isInteger(num))
  document.getElementById("ketQua").innerText = mangThuc.length

}

//10
function soSanhSoAmDuong(){
  const soDuong = mang.filter(num=>num>0).length
  const soAm = mang.filter(num=> num<0).length
  const ketQua = soDuong > soAm ? "Số dương nhiều hơn số âm" : soAm > soDuong ? "Số âm nhiều hơn số dương" : "Số âm bằng số dương" 
  document.getElementById("ketQua").innerText = ketQua

}

document.getElementById("soNguyen").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    themSo();
  }
});