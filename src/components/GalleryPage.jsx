import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../assets/styles/components/Gallery.css';

// KGMU December 26, 2024 event images
import kgmuDec26Image1 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.41.jpeg';
import kgmuDec26Image2 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.41 (2).jpeg';
import kgmuDec26Image3 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.41 (1).jpeg';
import kgmuDec26Image4 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.40.jpeg';
import kgmuDec26Image5 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.40 (2).jpeg';
import kgmuDec26Image6 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.40 (1).jpeg';
import kgmuDec26Image7 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.39.jpeg';
import kgmuDec26Image8 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.39 (2).jpeg';
import kgmuDec26Image9 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.39 (1).jpeg';
import kgmuDec26Image10 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.38.jpeg';
import kgmuDec26Image11 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.38 (2).jpeg';
import kgmuDec26Image12 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.38 (1).jpeg';
import kgmuDec26Image13 from '../assets/images/KGMU_W_26_12_24/WhatsApp Image 2025-07-29 at 20.03.33.jpeg';

// PCS December 22, 2024 event images
import pcsDec22Image1 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.52.jpeg';
import pcsDec22Image2 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.52 (1).jpeg';
import pcsDec22Image3 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.51.jpeg';
import pcsDec22Image4 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.51 (1).jpeg';
import pcsDec22Image5 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.50.jpeg';
import pcsDec22Image6 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.50 (2).jpeg';
import pcsDec22Image7 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.50 (1).jpeg';
import pcsDec22Image8 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.49.jpeg';
import pcsDec22Image9 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.46.jpeg';
import pcsDec22Image10 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.44.jpeg';
import pcsDec22Image11 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.44 (1).jpeg';
import pcsDec22Image12 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.43.jpeg';
import pcsDec22Image13 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.43 (1).jpeg';
import pcsDec22Image14 from '../assets/images/PCS_22_12_24/WhatsApp Image 2025-07-28 at 22.30.42.jpeg';

// PCS June 29, 2025 Main Exam event images
import pcsJune29Image1 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.19.31.jpeg';
import pcsJune29Image2 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.19.30.jpeg';
import pcsJune29Image3 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.19.30 (1).jpeg';
import pcsJune29Image4 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.19.29.jpeg';
import pcsJune29Image5 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.17.16.jpeg';
import pcsJune29Image6 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.15.45.jpeg';
import pcsJune29Image7 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.15.45 (1).jpeg';
import pcsJune29Image8 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.11.44.jpeg';
import pcsJune29Image9 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.10.22.jpeg';
import pcsJune29Image10 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.10.21.jpeg';
import pcsJune29Image11 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.10.18.jpeg';
import pcsJune29Image12 from '../assets/images/PCS_29_06_25/WhatsApp Image 2025-07-30 at 12.10.15.jpeg';

// PCS June 30, 2025 Main Exam Day 2 event images
import pcsJune30Image1 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.06.jpeg';
import pcsJune30Image2 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.05.jpeg';
import pcsJune30Image3 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.05 (2).jpeg';
import pcsJune30Image4 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.05 (1).jpeg';
import pcsJune30Image5 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.04.jpeg';
import pcsJune30Image6 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.17.04 (1).jpeg';
import pcsJune30Image7 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.23.jpeg';
import pcsJune30Image8 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.23 (1).jpeg';
import pcsJune30Image9 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.22.jpeg';
import pcsJune30Image10 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.22 (2).jpeg';
import pcsJune30Image11 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.22 (1).jpeg';
import pcsJune30Image12 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.15.21.jpeg';
import pcsJune30Image13 from '../assets/images/PCS_30_06_25/WhatsApp Image 2025-07-31 at 12.13.51.jpeg';

// PCS July 1, 2025 Main Exam Day 3 event images
import pcsJuly1Image1 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.09.jpeg';
import pcsJuly1Image2 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.09 (2).jpeg';
import pcsJuly1Image3 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.09 (1).jpeg';
import pcsJuly1Image4 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.08.jpeg';
import pcsJuly1Image5 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.08 (1).jpeg';
import pcsJuly1Image6 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.07.jpeg';
import pcsJuly1Image7 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.07 (2).jpeg';
import pcsJuly1Image8 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.07 (1).jpeg';
import pcsJuly1Image9 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.06.jpeg';
import pcsJuly1Image10 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.06 (1).jpeg';
import pcsJuly1Image11 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.05.jpeg';
import pcsJuly1Image12 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.05 (1).jpeg';
import pcsJuly1Image13 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.04.jpeg';
import pcsJuly1Image14 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.02.jpeg';
import pcsJuly1Image15 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.40.01.jpeg';
import pcsJuly1Image16 from '../assets/images/PCS_01_07_25/WhatsApp Image 2025-07-31 at 20.39.59.jpeg';

// PCS July 2, 2025 Main Exam Day 4 event images
import pcsJuly2Image1 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.41.jpeg';
import pcsJuly2Image2 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.41 (2).jpeg';
import pcsJuly2Image3 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.41 (1).jpeg';
import pcsJuly2Image4 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.40.jpeg';
import pcsJuly2Image5 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.40 (2).jpeg';
import pcsJuly2Image6 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.40 (1).jpeg';
import pcsJuly2Image7 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.39.jpeg';
import pcsJuly2Image8 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.39 (2).jpeg';
import pcsJuly2Image9 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.39 (1).jpeg';
import pcsJuly2Image10 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.38.jpeg';
import pcsJuly2Image11 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.38 (2).jpeg';
import pcsJuly2Image12 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.38 (1).jpeg';
import pcsJuly2Image13 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.37.jpeg';
import pcsJuly2Image14 from '../assets/images/PCS_02_07_25/WhatsApp Image 2025-08-04 at 22.20.37 (1).jpeg';

// Primary Schools April 14, 2025 event images
import primarySchoolsAprilImage1 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.34.jpeg';
import primarySchoolsAprilImage2 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.35 (1).jpeg';
import primarySchoolsAprilImage3 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.35.jpeg';
import primarySchoolsAprilImage4 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.36 (1).jpeg';
import primarySchoolsAprilImage5 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.36 (2).jpeg';
import primarySchoolsAprilImage6 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.36.jpeg';
import primarySchoolsAprilImage7 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.37 (1).jpeg';
import primarySchoolsAprilImage8 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.37.jpeg';
import primarySchoolsAprilImage9 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.38 (1).jpeg';
import primarySchoolsAprilImage10 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.38 (2).jpeg';
import primarySchoolsAprilImage11 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.38.jpeg';
import primarySchoolsAprilImage12 from '../assets/images/Primary_Schools_14_09_25/WhatsApp Image 2025-09-04 at 23.41.39.jpeg';

// Primary Schools August 3, 2025 event images
import primarySchoolsImage1 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.33.22.jpeg';
import primarySchoolsImage2 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.33.21.jpeg';
import primarySchoolsImage3 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.31.07.jpeg';
import primarySchoolsImage4 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.31.07 (1).jpeg';
import primarySchoolsImage5 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.29.29.jpeg';
import primarySchoolsImage6 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.29.29 (1).jpeg';
import primarySchoolsImage7 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.29.28.jpeg';
import primarySchoolsImage8 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.27.56.jpeg';
import primarySchoolsImage9 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.27.55.jpeg';
import primarySchoolsImage10 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.27.55 (1).jpeg';
import primarySchoolsImage11 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.27.53.jpeg';
import primarySchoolsImage12 from '../assets/images/Primary_Schools_03_08_25/WhatsApp Image 2025-08-10 at 13.27.52.jpeg';

// KGMU May 29, 2021 event images
import kgmuImage1 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.58.jpeg';
import kgmuImage2 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.57.jpeg';
import kgmuImage3 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.57 (1).jpeg';
import kgmuImage4 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.56.jpeg';
import kgmuImage5 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.56 (1).jpeg';
import kgmuImage6 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.55.jpeg';
import kgmuImage7 from '../assets/images/KGMU_29_05_21/WhatsApp Image 2025-07-13 at 12.10.55 (1).jpeg';

// KGMU June 1, 2021 event images
import kgmuJuneImage1 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.23.jpeg';
import kgmuJuneImage2 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.23 (2).jpeg';
import kgmuJuneImage3 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.23 (1).jpeg';
import kgmuJuneImage4 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.22.jpeg';
import kgmuJuneImage5 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.22 (2).jpeg';
import kgmuJuneImage6 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.22 (1).jpeg';
import kgmuJuneImage7 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.21.jpeg';
import kgmuJuneImage8 from '../assets/images/KGMU_01_06_21/WhatsApp Image 2025-07-13 at 12.17.21 (1).jpeg';

// KGMU June 8, 2021 event images
import kgmuJune8Image1 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.48.jpeg';
import kgmuJune8Image2 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.48 (2).jpeg';
import kgmuJune8Image3 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.48 (1).jpeg';
import kgmuJune8Image4 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.47.jpeg';
import kgmuJune8Image5 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.47 (2).jpeg';
import kgmuJune8Image6 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.47 (1).jpeg';
import kgmuJune8Image7 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.46.jpeg';
import kgmuJune8Image8 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.46 (2).jpeg';
import kgmuJune8Image9 from '../assets/images/KGMU_08_06_21/WhatsApp Image 2025-07-13 at 12.20.46 (1).jpeg';

// KGMU June 15, 2021 event images
import kgmuJune15Image1 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.10.jpeg';
import kgmuJune15Image2 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.10 (2).jpeg';
import kgmuJune15Image3 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.10 (1).jpeg';
import kgmuJune15Image4 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.09.jpeg';
import kgmuJune15Image5 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.09 (2).jpeg';
import kgmuJune15Image6 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.09 (1).jpeg';
import kgmuJune15Image7 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.08.jpeg';
import kgmuJune15Image8 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.08 (2).jpeg';
import kgmuJune15Image9 from '../assets/images/KGMU_15_06_21/WhatsApp Image 2025-07-13 at 12.22.08 (1).jpeg';

// KGMU June 22, 2021 event images
import kgmuJune22Image1 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.29.jpeg';
import kgmuJune22Image2 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.29 (1).jpeg';
import kgmuJune22Image3 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.28.jpeg';
import kgmuJune22Image4 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.28 (2).jpeg';
import kgmuJune22Image5 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.28 (1).jpeg';
import kgmuJune22Image6 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.27.jpeg';
import kgmuJune22Image7 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.27 (2).jpeg';
import kgmuJune22Image8 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.27 (1).jpeg';
import kgmuJune22Image9 from '../assets/images/KGMU_22_06_21/WhatsApp Image 2025-07-13 at 12.24.26.jpeg';

// Tuition Center Images
import tcFaizullaganjImage1 from '../assets/images/TC_Faizullaganj/WhatsApp Image 2025-07-13 at 12.26.20.jpeg';
import tcFaizullaganjImage2 from '../assets/images/TC_Faizullaganj/WhatsApp Image 2025-07-13 at 12.26.19.jpeg';
import tcFaizullaganjImage3 from '../assets/images/TC_Faizullaganj/WhatsApp Image 2025-07-13 at 12.26.19 (2).jpeg';
import tcFaizullaganjImage4 from '../assets/images/TC_Faizullaganj/WhatsApp Image 2025-07-13 at 12.26.19 (1).jpeg';

import tcJankipuramImage1 from '../assets/images/TC_Jankipuram/WhatsApp Image 2025-07-13 at 12.27.44.jpeg';
import tcJankipuramImage2 from '../assets/images/TC_Jankipuram/WhatsApp Image 2025-07-13 at 12.27.44 (1).jpeg';
import tcJankipuramImage3 from '../assets/images/TC_Jankipuram/WhatsApp Image 2025-07-13 at 12.27.43.jpeg';
import tcJankipuramImage4 from '../assets/images/TC_Jankipuram/WhatsApp Image 2025-07-13 at 12.27.43 (1).jpeg';

// Tuition Center Event Images
import tcChildrensDayImage1 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.16.jpeg';
import tcChildrensDayImage2 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.16 (1).jpeg';
import tcChildrensDayImage3 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.15.jpeg';
import tcChildrensDayImage4 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.15 (2).jpeg';
import tcChildrensDayImage5 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.15 (1).jpeg';
import tcChildrensDayImage6 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.14.jpeg';
import tcChildrensDayImage7 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.14 (2).jpeg';
import tcChildrensDayImage8 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.14 (1).jpeg';
import tcChildrensDayImage9 from '../assets/images/TC_Children\'s_Day/WhatsApp Image 2025-07-13 at 12.30.13.jpeg';

import tcWarmClothesImage1 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.15.jpeg';
import tcWarmClothesImage2 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.15 (2).jpeg';
import tcWarmClothesImage3 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.15 (1).jpeg';
import tcWarmClothesImage4 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.14.jpeg';
import tcWarmClothesImage5 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.14 (2).jpeg';
import tcWarmClothesImage6 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.14 (1).jpeg';
import tcWarmClothesImage7 from '../assets/images/TC_Warm_Clothes/WhatsApp Image 2025-07-13 at 12.31.13.jpeg';

import tcNewYearImage1 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.17.jpeg';
import tcNewYearImage2 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.17 (1).jpeg';
import tcNewYearImage3 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.16.jpeg';
import tcNewYearImage4 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.16 (2).jpeg';
import tcNewYearImage5 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.16 (1).jpeg';
import tcNewYearImage6 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.15.jpeg';
import tcNewYearImage7 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.15 (2).jpeg';
import tcNewYearImage8 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.15 (1).jpeg';
import tcNewYearImage9 from '../assets/images/TC_New_Year/WhatsApp Image 2025-07-13 at 12.32.14.jpeg';

const GalleryPage = () => {
  const [searchParams] = useSearchParams();
  const notificationId = searchParams.get('notification');

  // Notification data with dates and descriptions
  const notifications = [
    {
      id: 17,
      title: "Free Stationery and National Flag Distribution for All Students at Rural Government Primary Schools",
      date: "August 3, 2025",
      images: [
        { src: primarySchoolsImage1, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage2, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage3, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage4, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage5, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage6, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage7, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage8, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage9, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage10, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage11, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsImage12, alt: "Primary Schools - Educational Support", title: "Educational Support" }
      ],
      description: "Free Stationery and National Flag Distribution for All Students at Rural Government Primary Schools"
    },
    {
      id: 16,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center-Day 4",
      date: "July 2, 2025",
      images: [
        { src: pcsJuly2Image1, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image2, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image3, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image4, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image5, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image6, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image7, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image8, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image9, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image10, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image11, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image12, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image13, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly2Image14, alt: "PCS Main Exam Day 4 - Candidate Assistance", title: "Candidate Assistance" }
      ],
      description: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center"
    },
    {
      id: 15,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center-Day 3",
      date: "July 1, 2025",
      images: [
        { src: pcsJuly1Image1, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image2, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image3, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image4, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image5, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image6, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image7, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image8, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image9, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image10, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image11, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image12, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image13, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image14, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image15, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJuly1Image16, alt: "PCS Main Exam Day 3 - Candidate Assistance", title: "Candidate Assistance" }
      ],
      description: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center"
    },
    {
      id: 14,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center-Day 2",
      date: "June 30, 2025",
      images: [
        { src: pcsJune30Image1, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image2, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image3, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image4, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image5, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image6, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image7, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image8, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image9, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image10, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image11, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image12, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune30Image13, alt: "PCS Main Exam Day 2 - Candidate Assistance", title: "Candidate Assistance" }
      ],
      description: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center"
    },
    {
      id: 13,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center-Day 1",
      date: "June 29, 2025",
      images: [
        { src: pcsJune29Image1, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image2, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image3, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image4, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image5, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image6, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image7, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image8, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image9, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image10, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image11, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsJune29Image12, alt: "PCS Main Exam - Candidate Assistance", title: "Candidate Assistance" }
      ],
      description: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center"
    },
    {
      id: 18,
      title: "Free Stationery and Essential Study Materials Distribution at Government Primary School, Village Godhana",
      date: "April 14, 2025",
      images: [
        { src: primarySchoolsAprilImage1, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage2, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage3, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage4, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage5, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage6, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage7, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage8, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage9, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage10, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage11, alt: "Primary Schools - Educational Support", title: "Educational Support" },
        { src: primarySchoolsAprilImage12, alt: "Primary Schools - Educational Support", title: "Educational Support" }
      ],
      description: "Free Stationery and Essential Study Materials Distribution at Government Primary School, Village Godhana"
    },
    {
      id: 1,
      title: "Free Food & Water Distribution at Queen Mary Hospital, KGMU for Patient Attendants",
      date: "Dec 26, 2024",
      images: [
        { src: kgmuDec26Image1, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image2, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image3, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image4, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image5, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image6, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image7, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image8, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image9, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image10, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image11, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image12, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuDec26Image13, alt: "KGMU Food Distribution - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Water Distribution at Queen Mary Hospital, KGMU for Patient Attendants"
    },
    {
      id: 2,
      title: "Free Food & Water Distribution for PCS-Pre Candidates from Remote Districts",
      date: "Dec 22, 2024",
      images: [
        { src: pcsDec22Image1, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image2, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image3, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image4, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image5, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image6, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image7, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image8, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image9, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image10, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image11, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image12, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image13, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" },
        { src: pcsDec22Image14, alt: "PCS Food Distribution - Candidate Assistance", title: "Candidate Assistance" }
      ],
      description: "Food & Water Distribution for PCS-Pre Candidates from Remote Districts"
    },
    {
      id: 5,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 22, 2021",
      images: [
        { src: kgmuJune22Image1, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image2, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image3, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image4, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image5, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image6, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image7, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image8, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune22Image9, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave"
    },
    {
      id: 6,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 15, 2021",
      images: [
        { src: kgmuJune15Image1, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image2, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image3, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image4, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image5, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image6, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image7, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image8, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune15Image9, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave"
    },
    {
      id: 7,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 8, 2021",
      images: [
        { src: kgmuJune8Image1, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image2, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image3, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image4, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image5, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image6, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image7, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image8, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJune8Image9, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave"
    },
    {
      id: 4,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 1, 2021",
      images: [
        { src: kgmuJuneImage1, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage2, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage3, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage4, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage5, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage6, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage7, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuJuneImage8, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave"
    },
    {
      id: 3,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "May 29, 2021",
      images: [
        { src: kgmuImage1, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage2, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage3, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage4, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage5, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage6, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" },
        { src: kgmuImage7, alt: "KGMU COVID-19 Relief - Healthcare Support", title: "Healthcare Support" }
      ],
      description: "Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave"
    },
    {
      id: 12,
      title: "New Year Celebration at Both Free Tuition Centers",
      date: "January 2, 2015",
      images: [
        { src: tcNewYearImage1, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage2, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage3, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage4, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage5, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage6, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage7, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage8, alt: "New Year Celebration - Educational Support", title: "Educational Support" },
        { src: tcNewYearImage9, alt: "New Year Celebration - Educational Support", title: "Educational Support" }
      ],
      description: "New Year Celebration at Both Free Tuition Centers"
    },
    {
      id: 11,
      title: "Warm Clothes Distribution at Both Free Tuition Centers",
      date: "December 20, 2014",
      images: [
        { src: tcWarmClothesImage1, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage2, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage3, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage4, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage5, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage6, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" },
        { src: tcWarmClothesImage7, alt: "Warm Clothes Distribution - Educational Support", title: "Educational Support" }
      ],
      description: "Warm Clothes Distribution at Both Free Tuition Centers"
    },
    {
      id: 10,
      title: "Children's Day Celebration at Both Free Tuition Centers",
      date: "November 14, 2014",
      images: [
        { src: tcChildrensDayImage1, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage2, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage3, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage4, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage5, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage6, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage7, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage8, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" },
        { src: tcChildrensDayImage9, alt: "Children's Day Celebration - Educational Support", title: "Educational Support" }
      ],
      description: "Children's Day Celebration at Both Free Tuition Centers"
    },
    {
      id: 9,
      title: "Free Tuition Center at Jankipuram Garden, Lucknow",
      date: "September 2014",
      images: [
        { src: tcJankipuramImage1, alt: "Tuition Center Jankipuram - Educational Support", title: "Educational Support" },
        { src: tcJankipuramImage2, alt: "Tuition Center Jankipuram - Educational Support", title: "Educational Support" },
        { src: tcJankipuramImage3, alt: "Tuition Center Jankipuram - Educational Support", title: "Educational Support" },
        { src: tcJankipuramImage4, alt: "Tuition Center Jankipuram - Educational Support", title: "Educational Support" }
      ],
      description: "Free Tuition Center at Jankipuram Garden, Lucknow"
    },
    {
      id: 8,
      title: "Free Tuition Center at Faizullaganj, Lucknow",
      date: "August 2014",
      images: [
        { src: tcFaizullaganjImage1, alt: "Tuition Center Faizullaganj - Educational Support", title: "Educational Support" },
        { src: tcFaizullaganjImage2, alt: "Tuition Center Faizullaganj - Educational Support", title: "Educational Support" },
        { src: tcFaizullaganjImage3, alt: "Tuition Center Faizullaganj - Educational Support", title: "Educational Support" },
        { src: tcFaizullaganjImage4, alt: "Tuition Center Faizullaganj - Educational Support", title: "Educational Support" }
      ],
      description: "Free Tuition Center at Faizullaganj, Lucknow"
    }
  ];



  // Get the selected notification or show all
  const selectedNotification = notificationId ? notifications.find(n => n.id === parseInt(notificationId)) : null;
  const isNotificationView = selectedNotification !== null;

  return (
    <div className="gallery-page">
      <Header />
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header">
            <h1>
              {selectedNotification 
                ? selectedNotification.title 
                : "Our Complete Gallery"
              }
            </h1>
            <p>
              {selectedNotification 
                ? `${selectedNotification.description} - ${selectedNotification.date}`
                : "Explore all our community events, initiatives, and memorable moments"
              }
            </p>
            <div className="underline"></div>
          </div>
          
          {selectedNotification && (
            <div className="notification-info">
              <p className="notification-date">Date: {selectedNotification.date}</p>
            </div>
          )}

          {isNotificationView ? (
            // Single notification view
            <div className="gallery-grid">
              {selectedNotification.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={typeof image === 'string' ? image : image.src}
                    alt={typeof image === 'string' ? selectedNotification.description : image.alt}
                  />
                  <div className="gallery-overlay">
                    <h3>{typeof image === 'string' ? selectedNotification.description : image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // All notifications view - show each notification section
            <div className="all-notifications-container">
              {notifications.map((notification, notificationIndex) => (
                <div key={notificationIndex} className="notification-section">
                  <div className="notification-section-header">
                    <h2>{notification.title}</h2>
                    {notification.date && (
                      <p className="notification-date">Date: {notification.date}</p>
                    )}
                  </div>
                  <div className="gallery-grid">
                    {notification.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="gallery-item">
                        <img
                          src={typeof image === 'string' ? image : image.src}
                          alt={typeof image === 'string' ? notification.description : image.alt}
                        />
                        <div className="gallery-overlay">
                          <h3>{typeof image === 'string' ? notification.description : image.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="back-to-home">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            {selectedNotification && (
              <Link to="/gallery" className="btn-secondary">
                View All Images
              </Link>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GalleryPage; 