import React, { useState } from 'react';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';

const LicenseCard = () => {
  const [language, setLanguage] = useState('bn');

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'bn' ? 'en' : 'bn'));
  };

  const text = {
    bn: {
      title: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
      subtitle: 'সড়ক পরিবহন ও মহাসড়ক বিভাগ',
      authority: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ)',
      header: 'যাচাইকরন সফল',
      valid: 'এই ই-ড্রাইভিং লাইসেন্সটি বৈধ',
      licenseInfo: 'ড্রাইভিং লাইসেন্স এর তথ্য',
      personalInfo: 'ব্যাক্তিগত তথ্য',
      issued: 'ইস্যুর তারিখ',
      type: 'লাইসেন্স এর ধরণ',
      category: 'যানবাহনের শ্রেণী',
      expiry: 'মেয়াদ উত্তীর্ণের তারিখ',
      referenceNumber: 'রেফারেন্স নম্বর',
      referenceDate: 'রেফারেন্স এর তারিখ',
      name: 'নাম',
      fatherName: 'পিতা / স্বামীর নাম(ইংরেজী)',
      motherName: 'মায়ের নাম',
      bloodGroup: 'রক্তের গ্রুপ',
      birthDate: 'জন্ম তারিখ',
      NID: 'জাতীয় পরিচয়পত্র নম্বর',
      mobail: 'মোবাইল নম্বর',
      address: 'স্থায়ী ঠিকানা',
      paddress: 'বর্তমান ঠিকানা',
      office: 'লাইসেন্সিং কর্তৃপক্ষ',
      forAny: 'প্রয়োজনে',
      Or: 'অথবা',
      orEmailto: 'অথবা ইমেইল করুন ',
    },
    en: {
      title: 'Government of the People\'s Republic of Bangladesh',
      subtitle: 'Road Transport and Highways Division',
      authority: 'Bangladesh Road Transport Authority (BRTA)',
      header: 'Verification Successful',
      valid: 'This e-Driving License is Valid',
      licenseInfo: 'Driving License Information',
      personalInfo: 'Personal Information',
      issued: 'Issue Date',
      type: 'License Type',
      category: 'Vehicle Class',
      expiry: 'Expiry Date',
      referenceNumber: 'Reference No',
      referenceDate: 'Reference Date',
      name: 'Name',
      fatherName: 'Father\'s Name',
      motherName: 'Mother\'s Name',
      bloodGroup: 'Blood Group',
      birthDate: 'Date of Birth',
      NID: 'NID Number',
      mobail: 'mobail Number',
      address: 'Permanent Address',
      paddress: 'PRESENT ADDRESS',
      office: 'LICENSING AUTHORITY',
      forAny: 'For any further assistance, Please visit',
      Or: 'Or',
      orEmailto: 'or Email to',
    }
  };

  return (

    <div className='bg-[url("https://i.ibb.co/9V0VbXv/body-bg.jpg")] w-auto h-auto'>


      <div className="xl:w-[75.5%] lg:w-[97.5%] w-full uppercase mx-auto px-[13px] pt-6 shadow-md shadow-slate-300 bg-[#FFFFFF] text-black ">
        <div className="w-full flex justify-end ">
          <button
            onClick={handleLanguageToggle}
            className="flex items-center px-2 py-1 text-xl text-fuchsia-700 hover:text-black"
          >
            {language === 'bn' ? (
              <>
                <img className='w-6 h-6 pr-1' src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000" alt="bd" /> <span> English</span>
              </>
            ) : (
              <>
                <img className='w-6 h-6 pr-1' src="https://img.icons8.com/?size=100&id=60238&format=png&color=000000 " alt="usa" /> <span>বাংলা</span>
              </>
            )}
          </button>
        </div>

        <div className=' flex items-center justify-between px-4 -mb-1 md:mb-0'>
          <img src="https://i.ibb.co/BZZTmT1/BRTA-LOGO.png" alt="Logo" className=" w-16 h-16" />
          <img src="https://i.ibb.co/LY7s9N4/govt-logo.png" alt="Logo" className=" sm:ml-11 ml-5 w-16 h-16" />
          <img src="https://i.ibb.co/QYXxgbw/mujib-download.png" alt="Profile" className=" sm:w-26 w-20 h-16 sm:h-20" />


        </div>

        <div className="flex flex-col w-full justify-center items-center border-b pb-5 mb-49 mt-2 font-light text-lg text-[#444444]">
          <div className="text-center">
            <h2 className=' text-xl capitalize'>{text[language].title}</h2>
            <p className='m-0 capitalize'>{text[language].subtitle}</p>
            <p className='m-0'>{text[language].authority}</p>
            <h2 className="text-[25px] capitalize text-[#008000] font-semibold mt-3 mb-1 ">{text[language].header}</h2>
            <p className=' text-[#00008B] mb-8 text-base'>{text[language].valid}</p>
          </div>
          <img className='w-[150px] h-[150px]' src="https://i.ibb.co/SJjvkkz/SAKIB.png" alt="sakib" />
        </div>

        {/* details start hear ------------*/}

        <div className="w-full h-auto text-[#4d4d4d] mb-5 mt-5 -px-1 space-x-1">

          <h3 className="font-semibold text-lg">{text[language].licenseInfo}</h3>
          <div className=' flex justify-between flex-col md:gap-10 gap-5 py-8 px-7 font-semibold text-[13px]'>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4' >{text[language].referenceNumber}:</span>
              <p className=' text-[#020202] font-bold  basis-1/4' >THK24003P109</p>
              <span className=' basis-1/4'>{text[language].referenceDate}:</span>
              <p className=' text-[#020202] font-bold  basis-1/4' >18/04/2024</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].type}:</span>
              <p className=' text-[#020202] font-bold  basis-1/4' > PROFESSIONAL</p>
              <span className=' basis-1/4'>{text[language].category}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > LIGHT, MOTORCYCLE</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].issued}:</span>
              <p className=' text-[#020202] font-bold  basis-1/4' > 18/04/2024</p>
              <span className=' basis-1/4'>{text[language].expiry}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > 17/04/2029</p>
            </div>


          </div>


          <h3 className="font-semibold text-lg">{text[language].personalInfo}</h3>
          <div className=' flex justify-between flex-col md:gap-10 gap-5 py-8 px-7 font-semibold text-[13px]'>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].name}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > MD. SAJJAD HOSEN</p>
              <span className=' basis-1/4'>{text[language].fatherName}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > jolil khan</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].motherName}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > MST. SHULE BEGUM</p>
              <span className=' basis-1/4'>{text[language].birthDate}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > 01/01/2001</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].bloodGroup}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > A(+VE)</p>
              <span className=' basis-1/4'>{text[language].mobail}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > 01737705511</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].address}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > DOKKHIN SALANDAR, WARD NO 01, THAKURGOAN SADAR, THAKURGOAN-5100</p>
              <span className=' basis-1/4'>{text[language].paddress}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' >DOKKHIN SALANDOR , WARD NO 01, THAKURGAON ‍SADAR, THAKURGAON-5100</p>
            </div>

            <div className='flex justify-between items-start md:gap-10 gap-5 md:flex-row flex-col tracking-widest w-full'>
              <span className=' basis-1/4'>{text[language].NID}:</span>
              <p className=' text-[#020202] font-bold basis-1/4' > 78******38 </p>
              <span className=' basis-1/4'>{text[language].office}:</span>
              <p className=' text-[#020202] font-[700] basis-1/4' > THAKURGOAN</p>

            </div>
          </div>
        </div>

        <div className="border-t border-black w-full h-auto py-5 text-center capitalize ">
          <p className='text-[#333333] text-[13px] gap-[3px] items-center justify-center'>
            {text[language].forAny}
            <a target='_blank' href="https://brta.gov.bd/" className="text-purple-700 hover:text-black">
              www.brta.gov.bd
            </a>
            {text[language].Or}
            <a target='_blank' href="https://bsp.brta.gov.bd/dl-checker" className="text-purple-700 hover:text-black">
              bsp.brta.gov.bd/dl-checker
            </a>
            {text[language].orEmailto}
            <a target='_blank' href="mailto:info@brta.gov.bd" className="text-purple-700 hover:text-black">
              info@brta.gov.bd
            </a>
          </p>

        </div>
      </div>

    </div>

  );
};

export default LicenseCard;
