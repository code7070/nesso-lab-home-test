1. i18n Support — begitu Saya melihat pagenya tidak menggunakan bahasa inggris Saya terpikir agar lebih baik pagenya memiliki support multi-language atau internationalisation. Untuk library Saya menggunakan next-intl, library translation yang memang dibuat untuk NextJS dan cocok untuk penggunaan AppRouter.

2. Typography grouping — designnya dibuat cukup bagus dan terstruktur meski secara layer masih kurang rapi. Jadi Saya memutuskan untuk implementasi textnya menjadi beberapa bagian atau class. Mengimplementasikan hal ini dapat membuat bisa menggunakan model text secara fleksibel di banyak tempat dan mudah di manage.

3. Penggunaan SVG — Penggunaan SVG secara raw memiliki keuntungan mengurangi render effort dari browser. Dengan hal ini berarti kita juga menolong user dengan low-resource device tanpa mengorbankan pengalaman penggunaan. SVG yang digunakan juga Saya modify agar memiliki fill atau strokeColor bervalue 'currentColor'. Hal ini memungkinkan kita melakukan overiding color ke svg nya untuk kondisi tertentu, misalnya hover.

4. WEBP — Saya memutuskan untuk menggunakan WEBP untuk menggantikan beberapa gambar dengan format PNG. Hal ini juga menjadi concern karena WEBP lebih browser-friendly dan support alpha/transparancy dengan ukuran yang lebih kecil.

5. Component/Section Driven — Sebuah element hampir pasti akan mengalami scaling. Dan ketika terjadi adjustment sangat mungkin ada hal yang tidak semestinya ikut berubah. Dengan melakukan pembagian development Frontend dalam bentuk yang lebih kecil membuatnya mudah di manage serta dikembangkan pada kemudian hari. Tidak hanya itu, proses debugging juga jadi lebih mudah karena bisa dengan cepat dan percaya diri ketika melakukan fixing.

6. JPEG pada gambar flat — Bila ada gambar yang flat, tidak memerlukan shape unik atau transparency Saya akan menggunakan format JPEG. Hal ini juga menjadi concern karena JPEG lebih browser-friendly dan support alpha/transparancy dengan ukuran yang lebih kecil.

7. Color Variables — Penggunaan color variable memungkinkan kita melakukan mapping color dengan lebih mudah dan fleksibel. Dengan cara ini penggunaan ulang warna dapat dengan mudah dipanggil apalagi menggunakan tailwind V4.

8. Following Looks, Not size at all — In some cases with text or copy writing I think we should achive the look same as design as posible. So in some cases I change the padding, margin, spacing, etc. to make it more similar with design looks.


9. Brand Concern — We know brand should be shown in landing page, but in my humble opinion we should think about the UI & structure as well. So for mobile version I have two logo model, first with text in desktop and second the connecting-dot icon only.
