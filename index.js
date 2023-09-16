var listNumber = [];
function themSo() {
  //   if (listNumber.length === 0) {
  //     document.getElementById("result1").innerHTML = "Vui lòng nhập số vào mảng";
  //     return;
  //   }
  var txtNumber = document.getElementById("txtNumber").value * 1;
  listNumber.push(txtNumber);
  document.getElementById("result").innerHTML = listNumber;
}
// 1. Tổng các số dương
function tongSoDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result1").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  var sum = 0;
  var tong = `TỔNG CÁC SỐ DƯƠNG CỦA MẢNG : `;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number >= 0) {
      sum += number;
    }
  }
  tong += sum;
  document.getElementById("result1").innerHTML = tong;
}
// 2. Đếm các số dương

function demSoDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result2").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  var count = 0;
  var dem = `ĐẾM CÁC SỐ DƯƠNG CỦA MẢNG : `;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number >= 0) {
      count++;
    }
  }
  dem += count;
  document.getElementById("result2").innerHTML = dem;
}
// 3. Tìm số nhỏ nhất
function soNhoNhat() {
  if (listNumber.length === 0) {
    document.getElementById("result3").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  var nho = `SỐ NHỎ NHẤT TRONG MẢNG : `;
  var viTri = 0;
  var min = listNumber[viTri];
  for (var i = 1; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (min > number) {
      min = number;
    }
  }
  nho += min;
  document.getElementById("result3").innerHTML = nho;
}
// 4. Tìm số dương nhỏ nhất
function soMinDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result4").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  var duongnho = `SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG : `;
  var soNhoNhat = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (soNhoNhat > listNumber[i] && listNumber[i] > 0) {
      soNhoNhat = listNumber[i];
    }
  }
  duongnho += soNhoNhat;
  document.getElementById("result4").innerHTML = duongnho;
}
// 5. Tìm số chẵn cuối cùng
function soChanCuoi() {
  if (listNumber.length === 0) {
    document.getElementById("result5").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  let chan = `SỐ CHẴN CUỐI CÙNG TRONG MẢNG : `;
  var tong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number % 2 === 0 && listNumber[i] > 0) {
      tong = number;
    }
    if (tong == 0) {
      tong = document.getElementById("result5").innerHTML = -1;
    }
  }
  chan += tong;
  document.getElementById("result5").innerHTML = chan;
}

// 6. Đổi chỗ
function changeCho() {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  let index3 = 0;
  let change = `MẢNG ĐÃ ĐỔI : `;
  index3 = listNumber[index1];
  listNumber[index1] = listNumber[index2];
  listNumber[index2] = index3;
  for (let i = 0; i < listNumber.length; i++) {
    change += `[${listNumber[i]}]`;
  }
  document.getElementById("result6").innerHTML = change;
}

// 7. Sắp xếp tăng dần
function sort() {
  if (listNumber.length === 0) {
    document.getElementById("result7").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  let sapXep = `SẮP XẾP TĂNG DẦN : `;
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  sapXep += listNumber;
  document.getElementById("result7").innerHTML = sapXep;
}

// CHECK SỐ NGUYÊN TỐ
function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

// 8. Tìm số nguyên tố đầu tiên
function soNguyenToFirst() {
  if (listNumber.length === 0) {
    document.getElementById("result8").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  let firstPrime = 0;
  let soHang = `SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG : `;

  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      if (test_prime(listNumber[i]) === true) {
        firstPrime = listNumber[i];
      }
    }
  }

  if (firstPrime == 0) {
    soHang = document.getElementById("result8").innerHTML = -1;
  }
  soHang += firstPrime;
  document.getElementById("result8").innerHTML = soHang;
}

// 9. Nhập thêm mảng số thực , xem trong mảng có bao nhiêu số nguyên
function demSoNguyen() {
  if (listNumber.length === 0) {
    document.getElementById("result9").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  let countPrime = 0;
  let soThuc = `CÁC SỐ NGUYÊN TRONG MẢNG : `;

  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      if (test_prime(listNumber[i]) === true) {
        countPrime++;
      }
    }
  }
  soThuc += countPrime;
  document.getElementById("result9").innerHTML = soThuc;
}

//10. So sánh số lượng âm dương
function soLuongAmDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result10").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  let countPos = 0;
  let countNev = 0;
  let soSanh = "";

  for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 0) {
      countPos++;
    }

    if (listNumber[i] < 0) {
      countNev++;
    }
  }

  if (countPos > countNev) {
    soSanh += "Số dương nhiều hơn";
  } else if (countNev > countPos) {
    soSanh += "Số âm nhiều hơn";
  } else {
    soSanh += "Dương và âm bằng nhau";
  }

  document.getElementById("result10").innerHTML = soSanh;
}
