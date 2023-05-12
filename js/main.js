function timSoNhoNhat() {
    var tong = 0;
    for (var n = 0; tong < 10000; n++) {
        tong += n
    }
    document.getElementById('ketQua').innerHTML = 'Số n nhỏ nhất là: ' + n;
}

function tinhTong() {
    var soX = document.getElementById('2num1').value * 1,
        soN = document.getElementById('2num2').value * 1,
        soHang = 1,
        tong = 0;

    for (var i = 1; i <= soN; i++) {
        soHang *= soX;
        tong += soHang;
    }

    document.getElementById('ketQua-2').innerHTML = 'Tổng là: ' + tong
}

function tinhGiaiThua() {
    var soA = document.getElementById('3num1').value * 1,
        soHoanVi = 1;

    for (var i = 1; i <= soA; i++) {
        soHoanVi *= i;
    }
    document.getElementById('ketQua-3').innerHTML = 'Giai thừa là: ' + soHoanVi
}

function inThe() {
    var the = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            the += '<div class="alert alert-danger"></div>'
        }else{
            the += '<div class="alert alert-info"></div>'
        }
    }
    document.getElementById('ketQua-4').innerHTML = the
}

function check(number) {
    var isSNT = true
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isSNT = false;
            break;
        }
    }
    return isSNT
}


function inSNT() {
    var soB = document.getElementById('5num1').value * 1,
        ketQua = '';

    for (iSo = 2; iSo <= soB; iSo++) {
        var checkSNT = check(iSo);
        if (checkSNT) {
            ketQua += iSo + ' '
        }
    }
    document.getElementById('ketQua-5').innerHTML = ketQua
}