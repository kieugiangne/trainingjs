function moto(ten, mau, nang) {
    this.ten = ten;
    this.mau = mau;
    this.nang = nang; 
    this.run = function() {
        console.log(this);
    }
}

const Lead = new moto('Lead', 'vàng', 1200)

console.log(Lead.run());