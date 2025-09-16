const quizData = {
  "Arus Laut": [
    {
      question: "Arus Ekman adalah arus yang timbul akibat keseimbangan antara...",
      options: [
        "Gaya gradien tekanan dan gaya Coriolis",
        "Gaya gesekan angin dan gaya gesekan dasar",
        "Gaya Coriolis dan gaya gesekan viskos",
        "Gaya gravitasi dan gaya angin"
      ],
      answer: "Gaya Coriolis dan gaya gesekan viskos",
      explanation: "Dalam model Ekman yang disederhanakan (tanpa gradien tekanan), gaya Coriolis diimbangi oleh gaya gesekan internal (viskositas eddy) yang mentransfer momentum dari angin ke lapisan air di bawahnya."
    },
    {
      question: "Menurut teori Ekman, arah transpor massa netto (Transpor Ekman) di lapisan permukaan adalah...",
      options: [
        "Searah dengan angin",
        "45° ke kanan dari arah angin di BBU",
        "90° ke kanan dari arah angin di BBU",
        "Berlawanan dengan arah angin"
      ],
      answer: "90° ke kanan dari arah angin di BBU",
      explanation: "Meskipun arus permukaan bergerak 45° dari arah angin, jika seluruh pergerakan air di lapisan Ekman diintegrasikan, hasilnya adalah transpor massa total yang arahnya 90° (tegak lurus) ke kanan dari arah angin di BBU."
    },
    {
      question: "Arus yang bergerak sejajar dengan garis pantai dan disebabkan oleh gelombang yang pecah dengan sudut tertentu disebut...",
      options: ["Rip Current", "Arus Pasut", "Longshore Current", "Arus Geostropik"],
      answer: "Longshore Current",
      explanation: "Longshore current (arus sejajar pantai) terbentuk karena momentum dari gelombang yang pecah secara miring terhadap pantai, dan berperan penting dalam transpor sedimen."
    },
    {
      question: "Di daerah teluk atau estuari, pola arus pasut umumnya bersifat...",
      options: ["Rotasi (berputar)", "Bolak-balik (reversing)", "Hidrolik", "Konstan"],
      answer: "Bolak-balik (reversing)",
      explanation: "Di perairan terbatas seperti teluk dan estuari, arus pasut bergerak masuk saat pasang (flood) dan bergerak keluar saat surut (ebb), menciptakan pola bolak-balik."
    },
    {
      question: "Sirkulasi 'Global Conveyor Belt' dimulai dengan proses tenggelamnya air dingin dan asin di daerah...",
      options: ["Ekuator", "Laut Mediterania", "Lintang tinggi (kutub)", "Teluk Benggala"],
      answer: "Lintang tinggi (kutub)",
      explanation: "Proses pendinginan dan pembentukan es di daerah kutub (seperti Atlantik Utara) meningkatkan densitas air permukaan, menyebabkannya tenggelam dan memulai sirkulasi termohalin global."
    },
    {
      question: "Jika angin bertiup sejajar pantai ke arah utara di BBU (pantai di sebelah kanan), maka akan terjadi penumpukan massa air di pantai yang disebut...",
      options: ["Divergensi", "Upwelling", "Konvergensi", "Subduksi"],
      answer: "Konvergensi",
      explanation: "Transpor Ekman akan mendorong air ke arah kanan angin (ke arah pantai), menyebabkan penumpukan massa air atau konvergensi di dekat pantai."
    },
    {
      question: "Arus yang terjadi di selat yang menghubungkan dua badan air dengan karakteristik pasut yang berbeda disebut arus pasut tipe...",
      options: ["Rotasi", "Bolak-balik", "Hidrolik", "Independen"],
      answer: "Hidrolik",
      explanation: "Arus hidrolik terjadi karena perbedaan ketinggian muka air di kedua ujung selat, yang menciptakan aliran seperti di sungai."
    },
    {
      question: "Kecepatan arus permukaan yang ditimbulkan oleh angin secara kasar adalah sekitar...",
      options: [
        "30% dari kecepatan angin",
        "10% dari kecepatan angin",
        "3% dari kecepatan angin",
        "0.3% dari kecepatan angin"
      ],
      answer: "3% dari kecepatan angin",
      explanation: "Sebagai aturan praktis, kecepatan arus permukaan yang dihasilkan angin diperkirakan sekitar 3% dari kecepatan angin yang meniupnya."
    }
  ],

  "Gelombang Panjang": [
    {
      question: "Gelombang laut terutama dibangkitkan oleh...",
      options: ["Gempa bumi", "Pasang surut", "Angin", "Letusan gunung api bawah laut"],
      answer: "Angin",
      explanation: "Sebagian besar gelombang laut yang kita lihat di permukaan dibangkitkan oleh tiupan angin di atas laut."
    },
    {
      question: "Gelombang tsunami berbeda dengan gelombang angin karena...",
      options: [
        "Panjang gelombangnya jauh lebih besar",
        "Kecepatannya jauh lebih lambat",
        "Tidak dipengaruhi kedalaman laut",
        "Hanya terjadi di laut dalam"
      ],
      answer: "Panjang gelombangnya jauh lebih besar",
      explanation: "Gelombang tsunami memiliki panjang gelombang yang bisa mencapai ratusan kilometer, berbeda dengan gelombang angin yang panjangnya hanya beberapa meter hingga ratusan meter."
    },
    {
      question: "Gelombang pecah (breaking wave) biasanya terjadi ketika...",
      options: [
        "Gelombang bergerak ke laut dalam",
        "Kedalaman air < 1.3 × tinggi gelombang",
        "Gelombang melewati garis ekuator",
        "Gelombang bertemu arus pasang"
      ],
      answer: "Kedalaman air < 1.3 × tinggi gelombang",
      explanation: "Gelombang pecah terjadi ketika dasar gelombang menyentuh dasar laut dangkal sehingga kecepatan basis gelombang melambat dan puncak gelombang menjadi tidak stabil."
    }
  ],

  "Penginderaan Jarak Jauh Oseanografi": [
    {
      question: "Instrumen utama untuk mengukur arus laut secara langsung di lapangan adalah...",
      options: [
        "CTD (Conductivity, Temperature, Depth)",
        "ADCP (Acoustic Doppler Current Profiler)",
        "XBT (Expendable Bathythermograph)",
        "Tide Gauge"
      ],
      answer: "ADCP (Acoustic Doppler Current Profiler)",
      explanation: "ADCP bekerja dengan prinsip efek Doppler akustik, memantulkan gelombang suara pada partikel dalam air untuk mengukur kecepatan arus di berbagai kedalaman."
    },
    {
      question: "Satelit altimetri digunakan dalam oseanografi untuk mengukur...",
      options: [
        "Salinitas permukaan laut",
        "Tinggi muka laut (sea surface height)",
        "Kadar klorofil",
        "Arus bawah laut"
      ],
      answer: "Tinggi muka laut (sea surface height)",
      explanation: "Altimetri satelit memanfaatkan gelombang radar untuk mengukur jarak satelit ke permukaan laut, sehingga dapat mengetahui variasi tinggi muka laut global."
    },
    {
      question: "Sechi disk digunakan untuk mengukur...",
      options: [
        "Kecerahan/kejernihan air",
        "Kecepatan arus",
        "Salinitas",
        "Kedalaman"
      ],
      answer: "Kecerahan/kejernihan air",
      explanation: "Sechi disk adalah alat sederhana berupa cakram putih yang diturunkan ke dalam air untuk mengukur transparansi (kejernihan) kolom air."
    }
  ],

  "Manajemen Pesisir": [
    {
      question: "Tujuan utama dari manajemen pesisir adalah...",
      options: [
        "Meningkatkan aktivitas industri di pesisir",
        "Mengelola sumber daya pesisir secara berkelanjutan",
        "Menghapuskan semua pemanfaatan pesisir",
        "Memaksimalkan pembangunan tanpa memperhatikan lingkungan"
      ],
      answer: "Mengelola sumber daya pesisir secara berkelanjutan",
      explanation: "Manajemen pesisir berfokus pada keseimbangan antara pemanfaatan sumber daya untuk manusia dan kelestarian ekosistem."
    },
    {
      question: "Contoh instrumen hukum yang digunakan dalam manajemen pesisir adalah...",
      options: [
        "Undang-undang pengelolaan wilayah pesisir",
        "Surat izin cuti",
        "Peraturan lalu lintas",
        "Sertifikat profesi"
      ],
      answer: "Undang-undang pengelolaan wilayah pesisir",
      explanation: "Instrumen hukum memberi dasar peraturan agar pengelolaan pesisir dapat berjalan terarah sesuai prinsip berkelanjutan."
    }
  ],

  "Manajemen Proyek": [
    {
      question: "Dalam manajemen proyek, WBS (Work Breakdown Structure) berfungsi untuk...",
      options: [
        "Membagi proyek menjadi bagian-bagian kecil yang lebih mudah dikelola",
        "Membuat laporan akhir",
        "Menghitung biaya operasional",
        "Menyusun laporan keuangan"
      ],
      answer: "Membagi proyek menjadi bagian-bagian kecil yang lebih mudah dikelola",
      explanation: "WBS membantu memecah proyek kompleks menjadi komponen lebih kecil sehingga perencanaan dan eksekusi lebih efektif."
    },
    {
      question: "Critical Path Method (CPM) digunakan untuk...",
      options: [
        "Mengidentifikasi jalur terlama yang menentukan durasi proyek",
        "Mencatat penggunaan sumber daya",
        "Mengatur manajemen personalia",
        "Membuat laporan risiko"
      ],
      answer: "Mengidentifikasi jalur terlama yang menentukan durasi proyek",
      explanation: "CPM membantu mengetahui aktivitas-aktivitas kunci yang harus selesai tepat waktu agar proyek tidak terlambat."
    }
  ],

  "Mitigasi dan Bencana Laut": [
    {
      question: "Mikroorganisme bentik yang paling sering digunakan sebagai bioindikator kualitas sedimen adalah...",
      options: ["Foraminifera", "Radiolaria", "Diatom", "Dinoflagellata"],
      answer: "Foraminifera",
      explanation: "Foraminifera hidup di dasar laut dan sangat sensitif terhadap perubahan lingkungan, sehingga baik digunakan sebagai bioindikator."
    },
    {
      question: "Metode enumerasi dalam studi bentik bertujuan untuk...",
      options: [
        "Menghitung jumlah individu per satuan luas",
        "Menentukan arah arus",
        "Mengukur kecerahan air",
        "Menganalisis kandungan klorofil"
      ],
      answer: "Menghitung jumlah individu per satuan luas",
      explanation: "Enumerasi berarti penghitungan individu organisme dalam sampel untuk mengetahui kepadatan populasi bentik."
    }
  ],

  "Oseanografi Biologi": [
    {
      question: "Plankton terdiri dari...",
      options: [
        "Fitoplankton dan zooplankton",
        "Nekton dan bentos",
        "Mikroalga dan ikan",
        "Moluska dan krustasea"
      ],
      answer: "Fitoplankton dan zooplankton",
      explanation: "Plankton dibagi menjadi fitoplankton (tumbuhan) dan zooplankton (hewan) yang melayang mengikuti arus."
    },
    {
      question: "Contoh organisme bentik adalah...",
      options: ["Terumbu karang", "Tuna", "Ubur-ubur", "Ikan teri"],
      answer: "Terumbu karang",
      explanation: "Bentos adalah organisme yang hidup di dasar laut, contohnya terumbu karang dan cacing laut."
    }
  ],

  "Oseanografi Geologi": [
    {
      question: "Remote sensing digunakan dalam oseanografi untuk...",
      options: [
        "Mengukur kecerahan langit",
        "Mendeteksi parameter laut dari citra satelit",
        "Menentukan umur batuan",
        "Merekam suara paus"
      ],
      answer: "Mendeteksi parameter laut dari citra satelit",
      explanation: "Remote sensing memanfaatkan sensor satelit untuk memperoleh informasi tentang suhu permukaan laut, klorofil, hingga arus."
    },
    {
      question: "Sistem informasi geografis (SIG) digunakan untuk...",
      options: [
        "Membuat peta dan analisis spasial",
        "Menghitung kecepatan arus",
        "Menganalisis sampel air",
        "Merekam suara bawah laut"
      ],
      answer: "Membuat peta dan analisis spasial",
      explanation: "SIG berguna dalam visualisasi data oseanografi dalam bentuk spasial seperti peta distribusi suhu atau salinitas."
    }
  ],

  "Oseanografi Indonesia": [
    {
      question: "Pasang surut diakibatkan oleh...",
      options: [
        "Tarikan gravitasi bulan dan matahari",
        "Gelombang laut",
        "Arus bawah laut",
        "Aktivitas seismik"
      ],
      answer: "Tarikan gravitasi bulan dan matahari",
      explanation: "Gaya tarik gravitasi benda langit, terutama bulan, menyebabkan naik turunnya muka laut yang dikenal sebagai pasang surut."
    },
    {
      question: "Pasang surut campuran memiliki ciri...",
      options: [
        "Dua kali pasang dengan tinggi sama",
        "Satu kali pasang satu kali surut",
        "Dua kali pasang dengan tinggi berbeda",
        "Tidak ada pola tetap"
      ],
      answer: "Dua kali pasang dengan tinggi berbeda",
      explanation: "Pasang surut campuran terjadi bila dalam sehari terdapat dua kali pasang dan dua kali surut dengan tinggi yang tidak sama."
    }
  ],

  "Oseanografi Kimia": [
    {
      question: "Salinitas didefinisikan sebagai...",
      options: [
        "Jumlah garam terlarut dalam air laut",
        "Jumlah sedimen dalam air",
        "Jumlah nutrien di laut",
        "Jumlah oksigen dalam air"
      ],
      answer: "Jumlah garam terlarut dalam air laut",
      explanation: "Salinitas menunjukkan total konsentrasi ion garam terlarut dalam satu kilogram air laut."
    },
    {
      question: "Gas terlarut yang paling penting bagi respirasi organisme laut adalah...",
      options: ["Nitrogen", "Karbon dioksida", "Oksigen", "Metana"],
      answer: "Oksigen",
      explanation: "Oksigen terlarut adalah gas vital bagi kehidupan organisme aerob di laut."
    }
  ]
};

// =====================
// SLIDER SETUP
// =====================
const slider = document.getElementById("topic-slider");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

let currentSlide = 0;

Object.keys(quizData).forEach(topic => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.style.backgroundImage = `url(img/${topic.toLowerCase().replace(/\s+/g, '-')}.jpg)`;

  slide.innerHTML = `
    <div class="slide-overlay">
      <h2>${topic}</h2>
      <button class="start-btn" onclick="startQuiz('${topic}')">Mulai Kuis</button>
    </div>
  `;
  slider.appendChild(slide);
});

function showSlide(index) {
  if (index < 0) currentSlide = Object.keys(quizData).length - 1;
  else if (index >= Object.keys(quizData).length) currentSlide = 0;
  else currentSlide = index;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.onclick = () => showSlide(currentSlide - 1);
nextBtn.onclick = () => showSlide(currentSlide + 1);
showSlide(0);

// =====================
// QUIZ LOGIC
// =====================
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizTopicTitle = document.getElementById("quiz-topic-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreText = document.getElementById("score-text");
const answersReview = document.getElementById("answers-review");

const prevQBtn = document.getElementById("prev-btn");
const nextQBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentTopic = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  userAnswers = [];
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  quizTopicTitle.textContent = topic;
  loadQuestion();
}

function loadQuestion() {
  const questionObj = quizData[currentTopic][currentQuestionIndex];
  questionText.textContent = questionObj.question;
  optionsContainer.innerHTML = "";
  questionObj.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(opt);
    optionsContainer.appendChild(btn);
  });
  prevQBtn.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
  nextQBtn.disabled = !(userAnswers[currentQuestionIndex]);
}

function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;
  loadQuestion();
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const questions = quizData[currentTopic];
  let correct = 0;
  answersReview.innerHTML = "";

  questions.forEach((q, idx) => {
    const userAns = userAnswers[idx] || "(tidak dijawab)";
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <p><strong>${idx + 1}. ${q.question}</strong></p>
      <p>Jawaban Anda: <span class="${userAns === q.answer ? 'correct' : 'wrong'}">${userAns}</span></p>
      <p>Jawaban Benar: <span class="correct">${q.answer}</span></p>
      <p><em>${q.explanation}</em></p>
    `;
    answersReview.appendChild(div);
    if (userAns === q.answer) correct++;
  });

  scoreText.textContent = `Skor Anda: ${correct} / ${questions.length}`;
}

prevQBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

nextQBtn.addEventListener("click", () => {
  if (currentQuestionIndex < quizData[currentTopic].length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
});

restartBtn.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
});