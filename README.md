# Snake Game 🐍

Snake Game adalah permainan klasik berbasis web di mana Anda mengontrol ular untuk mengumpulkan makanan dan bertumbuh tanpa menabrak dinding atau tubuhnya sendiri.

## Fitur 🎮
- **Gameplay sederhana dan menyenangkan.**
- **Tampilan minimalis yang intuitif.**
- **Scoreboard untuk mencatat skor terbaik.**

## Cara Bermain 🕹️
1. **Gunakan tombol panah** (↑ ↓ → ←) untuk mengontrol arah gerakan ular.
2. Kumpulkan makanan yang muncul di layar.
3. Hindari menabrak dinding atau tubuh ular sendiri.
4. Raih skor tertinggi yang Anda bisa!

## Teknologi yang Digunakan 💻
- **HTML**: Untuk struktur permainan.
- **CSS**: Untuk mempercantik tampilan.
- **JavaScript**: Untuk logika permainan.

## Instalasi 🚀
1. Clone repository ini:
   ```bash
   git clone https://github.com/Pindosaputra123/Snake-Game.git
   ```
2. Buka file `index.html` di browser Anda.

## Cuplikan Kode 🗂
```javascript
// Contoh fungsi utama dalam Snake Game
function updateSnakePosition() {
    if (collision()) {
        resetGame();
        return;
    }
    moveSnake();
    if (ateFood()) {
        growSnake();
        generateFood();
    }
}
```

## Kontribusi 🤝
Kami menerima kontribusi! Silakan fork repository ini, buat perubahan, dan kirim pull request.

1. Fork proyek ini.
2. Buat branch fitur Anda (`git checkout -b fitur/fitur-baru`).
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke branch Anda (`git push origin fitur/fitur-baru`).
5. Buka pull request.

## Lisensi 📜
Proyek ini dilisensikan di bawah lisensi [MIT](https://opensource.org/licenses/MIT).

---

Selamat bermain dan bersenang-senang! 🎉
