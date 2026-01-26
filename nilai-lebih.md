1. i18n Support — begitu Saya melihat pagenya tidak menggunakan bahasa inggris Saya terpikir agar lebih baik pagenya memiliki support multi-language atau internationalisation. Untuk library Saya menggunakan next-intl, library translation yang memang dibuat untuk NextJS dan cocok untuk penggunaan AppRouter.

2. Typography grouping — designnya dibuat cukup bagus dan terstruktur meski secara layer masih kurang rapi. Jadi Saya memutuskan untuk implementasi textnya menjadi beberapa bagian atau class. Mengimplementasikan hal ini dapat membuat bisa menggunakan model text secara fleksibel di banyak tempat dan mudah di manage.

3. Penggunaan SVG — Penggunaan SVG secara raw memiliki keuntungan mengurangi render effort dari browser. Dengan hal ini berarti kita juga menolong user dengan low-resource device tanpa mengorbankan pengalaman penggunaan.

4. WEBP — Saya memutuskan untuk menggunakan WEBP untuk menggantikan beberapa gambar dengan format PNG. Hal ini juga menjadi concern karena WEBP lebih browser-friendly dan support alpha/transparancy dengan ukuran yang lebih kecil.

5. Component/Section Driven — Sebuah element hampir pasti akan mengalami scaling. Dan ketika terjadi adjustment sangat mungkin ada hal yang tidak semestinya ikut berubah. Dengan melakukan pembagian development Frontend dalam bentuk yang lebih kecil membuatnya mudah di manage serta dikembangkan pada kemudian hari. Tidak hanya itu, proses debugging juga jadi lebih mudah karena bisa dengan cepat dan percaya diri ketika melakukan fixing.

6. JPEG pada gambar flat — Bila ada gambar yang flat, tidak memerlukan shape unik atau transparency Saya akan menggunakan format JPEG. Hal ini juga menjadi concern karena JPEG lebih browser-friendly dan support alpha/transparancy dengan ukuran yang lebih kecil.

7.
