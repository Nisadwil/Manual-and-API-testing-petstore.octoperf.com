describe('Q4. Automation Testing Cermati Website_Annisa Dwi Lestari', () => {

  it('1. User Berhasil akses website Cermati', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.contains('Daftar');
    cy.contains('No. Handphone');
    cy.contains('Email');
    cy.contains('Nama Depan');
    cy.contains('Nama Belakang');
    cy.wait(1000);
  });
  
  it('2. User berhasil akses Menu Beranda, Produk, Akun, dan Logo', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('#top-beranda-logo').click();
    cy.wait(2000);
    cy.get('a[href="/app/products"]').click();
    cy.contains('Daftar Produk Cermati');
    cy.wait(1000);
    cy.get('a[href="/app/me"]').click();
    cy.contains('No. Handphone/Email');
    cy.wait(1000);
    cy.get('img[alt="cermati.com"]').click();
    cy.wait(5000);
  });
  
  it('3. User gagal mendaftar tanpa mengisi informasi Nama Belakang', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('input[name="mobilePhone"]').type('081233069247');
    cy.get('input[name="email"]').type('duit@gmail.com');
    cy.get('input[name="firstName"]').type('Duit');
    cy.contains('button', 'Daftar').click();
    cy.contains('Input wajib diisi');
    cy.wait(1000);
  });

  it('4. User gagal mendaftar tanpa mengisi informasi Nama Depan', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('input[name="mobilePhone"]').type('081233069247');
    cy.get('input[name="email"]').type('duit@gmail.com');
    cy.get('input[name="lastName"]').type('Test');
    cy.contains('button', 'Daftar').click();
    cy.contains('Input wajib diisi');
    cy.wait(1000);
  });

  it('5. User gagal mendaftar tanpa mengisi informasi Email', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('input[name="mobilePhone"]').type('081233069247');
    cy.get('input[name="firstName"]').type('Duit');
    cy.get('input[name="lastName"]').type('Test');
    cy.contains('button', 'Daftar').click();
    cy.contains('Input wajib diisi');
    cy.wait(1000);
  });

  it('6. User gagal mendaftar tanpa mengisi informasi No. Handphone', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('input[name="email"]').type('duit@gmail.com');
    cy.get('input[name="firstName"]').type('Duit');
    cy.get('input[name="lastName"]').type('Test');
    cy.contains('button', 'Daftar').click();
    cy.contains('Input wajib diisi');
    cy.wait(1000);
  });

 it('7. User berhasil mendaftarkan Akun Baru (reCAPTCHA dilakukan secara manual)', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('input[name="mobilePhone"]').type('081233069247');
    cy.get('input[name="email"]').type('duit@gmail.com');
    cy.get('input[name="firstName"]').type('Duit');
    cy.get('input[name="lastName"]').type('Test');
    cy.contains('button', 'Daftar').click();
    cy.wait(100000); // 100 detik untuk menyelesaikan reCAPTCHA secara Manual, reCAPTCHA terlalu banyak sehingga memakan waktu yang lama.
    // Lebih baik jika saat untuk testing automation, reCAPTCHA di disable atau disediakan akun yang dapat bypass reCAPTCHA
    // Setelah menyelesaikan reCAPTCHA, klik tombol Daftar lagi
    cy.contains('button', 'Daftar').click();
    // Sukses direct ke halaman OTP
    cy.wait(15000); // 15 detik untuk input OTP
    // Sukses direct buat PIN
    cy.contains('button', 'Buat PIN').click();
    cy.wait(30000); // 30 detik untuk buat PIN
    // User berhasil buat PIN, Sukses direct ke halaman Beranda
    cy.contains('Laporan Kredit');
    cy.get('a[href="/app/me"]').click();
    cy.contains('Duit Test');
    cy.contains('duit@gmail.com');
    cy.contains('081233069247');
    cy.wait(1000);
  });

  it('8. User Berhasil Masuk Cermati', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.contains('Masuk').click();
    cy.get('input[name="identifier"]').type('081233069247');
    cy.contains('button', 'Masuk').click();
    cy.wait(100000); // 100 detik untuk menyelesaikan reCAPTCHA secara Manual, reCAPTCHA terlalu banyak sehingga memakan waktu yang lama.
    // Lebih baik jika saat untuk testing automation, reCAPTCHA di disable atau disediakan akun yang dapat bypass reCAPTCHA
    // Setelah menyelesaikan reCAPTCHA, klik tombol Masuk lagi   
    cy.contains('button', 'Masuk').click();
    cy.wait(15000); // Tunggu 15 detik untuk input PIN/OTP
    // User berhasil login dan direct ke halaman Beranda
    cy.contains('Laporan Kredit');
    cy.get('a[href="/app/me"]').click();
    cy.contains('Duit Test');
    cy.contains('duit@gmail.com');
    cy.contains('081233069247');
    cy.wait(1000);
  });

  it('9. User Berhasil Login Cermati dengan Menu Akun', () => {
    cy.visit('https://www.cermati.com/gabung');
    cy.get('a[href="/app/me"]').click();
    cy.get('input[name="identifier"]').type('081233069247');
    cy.contains('button', 'Masuk').click();
    cy.wait(100000); // 100 detik untuk menyelesaikan reCAPTCHA secara Manual, reCAPTCHA terlalu banyak sehingga memakan waktu yang lama.
    // Lebih baik jika saat untuk testing automation, reCAPTCHA di disable atau disediakan akun yang dapat bypass reCAPTCHA
    // Setelah menyelesaikan reCAPTCHA, klik tombol Daftar lagi
    cy.contains('button', 'Masuk').click();
    cy.wait(15000); // Tunggu 15 detik untuk input PIN/OTP
    // User berhasil login dan direct ke Menu Akun
    cy.contains('Akun Saya');
    cy.contains('Duit Test');
    cy.contains('duit@gmail.com');
    cy.contains('081233069247');
    cy.wait(1000);
  });
});