// Example data structure
interface Item {
    id: number;
    url: string;
    name:string;
  }

interface name{
  animal:String;
}
  
  const HistoryVideo: Item[]=[
    {url:"-NqyELZefXA" ,id:1, name:"History Class 01"},
    {url:"bsUo6WpNXes" ,id:2, name:"History Class 02"},  
    {url:"q_QbWshONZ4" ,id:3, name:"History Class 03"},
    {url:"H4qzdQN-G7g" ,id:4, name:"History Class 04"},
    {url:"OKqCQtObj6E" ,id:5, name:"History Class 06"},
    {url:"__gjPMM7-zI" ,id:6, name:"History Class 07"},
    {url:"3_Eqi79JkeI" ,id:7, name:"History Class 08"},
    {url:"R-2Za_YWUhg" ,id:8, name:"History Class 09"},
    {url:"1TVD2qBuba0" ,id:9, name:"History Class 10"},
    {url:"969ghCwf0Wk" ,id:10, name:"History Class 11"},
    {url:"3xt0ZpXM-r4" ,id:11, name:"History Class 12"},
    {url:"qXhxqkpfxEk" ,id:12, name:"History Class 13"},
    {url:"QdP4VGmk3LA" ,id:13, name:"History Class 14 (Jain + Boudh )"},
    {url:"tHfjQTkNk2Y" ,id:14, name:"History Class 15 (Boudh Last )"},
    {url:"7e63fJ3kGvc" ,id:15, name:"History Class 16 (Boudh )"},
    {url:"zNTh_GShK7A" ,id:16, name:"History Class 17"},
    {url:"fY8X00F68q8" ,id:17, name:"History Class 18 ( Other Riligions )"},
    {url:"JGoAdkujFI0" ,id:18, name:"History Class 19 ( Other Riligions )"},
    {url:"6M_BuR7H3Ww" ,id:19, name:"History Class 20 ( Other Riligions )"},
    {url:"-w2jzq3OMjo" ,id:20, name:"religion 3"},
    {url:"0BW-iFFHyPM" ,id:21, name:"religion 3"},
    {url:"CdtCzRBWYXg" ,id:22, name:"History Class 24 ( Other Riligions )"},
    {url:"C7mp7o4t1pc" ,id:23, name:"History Class 25 ( Shisunag &amp; Nand Vans)"},
    {url:"gnR-p_MFACY" ,id:24, name:"History Class 26"},
    {url:"LQfP88fre_w" ,id:25, name:"History Class 27"},
    {url:"P50BLHqkZjE" ,id:26, name:"History Class 28 (Ashok)"},
    {url:"_cfUpuBYiTA" ,id:27, name:"History Class 29 (Ashok)"},
    {url:"kIhQBhul15s" ,id:28, name:"History Class 30 (Ashok )"},
    {url:"4QQHLD5iV8U" ,id:29, name:"History Class 31 (Ashok )"},
    {url:"sT4dxQwV2qs" ,id:30, name:"History Class 32 (Ashok )"},
    {url:"eqj6VoSMp-k" ,id:31, name:"History Class 33 (ISPK)"},
    {url:"xNDpgmmdj8I" ,id:32, name:"History Class 34( kushan &amp; Gupta)"},
    {url:"8LRveTmUrog" ,id:33, name:"History Class 35 (Gupta)"},
    {url:"2kpDzmjfZ1s" ,id:34, name:"History Class 36 (Sangam kaal)"},
    {url:"mdSMSk8___4" ,id:35, name:"History Class 37(Sangam kaal)"},  
    {url:"x778gNEaKY4" ,id:36, name:"History Class 38 (Vakatak &amp; Chalukya Vans)"},  
    {url:"TjDSBG3BB2Q" ,id:37, name:"History Class 39 (PahalavVans)"},  
    {url:"txk7kwGNwwA" ,id:38, name:"History Class 40 (Chol Vans )"},  
    {url:"okjMbXisQbQ" ,id:39, name:"History Class 41 (Rastrakut &amp; Paal)"},
    {url:"5QQzyeXAIqw" ,id:40, name:"History Class 42 (सेन, प्रतिहार और चंदेल)"},
    {url:"q7yXDRm324o" ,id:41, name:"History Class 43 (Important Small States)"},
    {url:"qoX0I6zHuKE" ,id:42, name:"History Class 44(Important Small States)"},
    {url:"6rBbIaYsfF8" ,id:43, name:"History Class 45 (Murti kala)"},
    {url:"ubb9b5mt6_Q" ,id:44, name:"History Class 46 (Mandir Nirmaan)"},
    {url:"cnIcDeNawi0" ,id:45, name:"History Class 47 (Chauhan vansh)"},
    {url:"0sZ5TzDleXk" ,id:46, name:"History Mediaeval Class 48 (Muhamad gori)"},
    {url:"0CXg1BNHnCc" ,id:47, name:"History Mediaeval Class 49 (Muhamad gori)"},
    {url:"ph74CQs9ToU" ,id:48, name:"History Mediaeval Class 50"},  
    {url:"8svqzZKfCqA" ,id:49, name:"History 51(Delhi Sultnat)"},
    {url:"XhiuvzAF9BM" ,id:50, name:"History 52 (Delhi Sultnat)"},
    {url:"unC_euz6Q6M" ,id:51, name:"History 53 (Delhi Sultnat)"},
    {url:"AgOJjfqFV_8" ,id:52, name:"History 54 (Tuglak vansh)"},
    {url:"lrFA2PoIqMc" ,id:53, name:"History 55 (Sayyad vansh)"},
    {url:"yq9Cd2ZNHwU" ,id:54, name:"History 56 (Lodi vansh)"},
    {url:"JwcxCPr7MzY" ,id:55, name:"History 57 (Delhi saltnut+Vijaynagar)"},
    {url:"20Mtv5HbkAU" ,id:56, name:"History 57 (Delhi saltnut+Vijaynagar)"},
    {url:"UJBZnpanUA4" ,id:57, name:"History 58 (Vijaynagar)"},
    {url:"BBBOwpnZX9o" ,id:58, name:"vijai nagar 2"},
    {url:"nHL7LGxKEfs" ,id:59, name:"Bahmani Samrajya"},
    {url:"08yiqWBlUYg" ,id:60, name:"भक्ति आंदोलन"},
    {url:"YNZf3AxwiUw" ,id:61, name:"Sikh &amp; Shufi Bhakti"},
    {url:"9fpqlrrK5LU" ,id:62, name:"Shufi"},
    {url:"HbL4aVGFSWE" ,id:63, name:"Mughal Period 01 (Babar)"},
    {url:"WEWppAb4YxE" ,id:64, name:"हुमायूं"},
    {url:"SyM3TA9nP4E" ,id:65, name:"शेरशाह सूरी 01"},
    {url:"z8yBc5VLGPQ" ,id:66, name:"शेरशाह सूरी 02"},
    {url:"BesuVBywr1E" ,id:67, name:"अकबर 01 | History Foundation"},
    {url:"Wku62H1saoA" ,id:68, name:"अकबर 02 | History Foundation"},
    {url:"o1OXM0Kwgnw" ,id:69, name:"अकबर 03 | Foundation"},
    {url:"_AiWYocuwfY" ,id:70, name:"Akbar 04"},
    {url:"LqSwoMym3qo" ,id:71, name:"Akbar 05"},
    {url:"kv9q3gEOWCE" ,id:72, name:"Jahangeer"},
    {url:"JLv4DgA9xiU" ,id:73, name:"Sagjahan + Noorjahan"},
    {url:"SidjjFQpUps" ,id:74, name:"Saahjahan + Aurangjeb"},
    {url:"pBW6tlIC0Ds" ,id:75, name:"Aurangjeb"},
    {url:"782BCmXXGoE" ,id:76, name:"Post Mughal Period"},
    {url:"XlGzH0zr23c" ,id:77, name:"Post Mughal Period 02"},
    {url:"5_kkNb7eEhU" ,id:78, name:"Post Mughal Period 03"},
    {url:"JqjQ2Mb2lt4" ,id:79, name:"मुग़ल काल की प्रशासनिक ब्यवस्था"},
    {url:"hPe0GnZyr88" ,id:80, name:"मुग़ल काल की प्रशासनिक ब्यवस्था 02"},
    {url:"0sWft81nxY0" ,id:81, name:"Maratha Samrajya 02"},
    {url:"3aCwHR4JORA" ,id:82, name:"Maratha Samrajya 03"},
    {url:"l6gFV2kx0Fc" ,id:83, name:"Karnatak , Maisur"},
    {url:"z98XHkrfkBM" ,id:84, name:"Punjab , Bangal"},
    {url:"OaVI-asWhAA" ,id:85, name:"Bangal"},
    {url:"dVO-1xurZdM" ,id:86, name:"east India company"},
    {url:"SIuDr5kMoxQ" ,id:87, name:"Revolution of 1857"},
    {url:"01tG0aQNbiE" ,id:88, name:"Indian National Congress 01"},
    {url:"Tsg9i1UnudQ" ,id:89, name:"Indian National Congress 02"},
    {url:"TjfoQIy6BMg" ,id:90, name:"क्रन्तिकारी आन्दोलन 02"},
    {url:"fSBKgS_dTAU" ,id:91, name:"क्रन्तिकारी आन्दोलन 03"},
    {url:"Oie2XVGpbQA" ,id:92, name:"Social Reform Organisation"},
    {url:"I_qgfecqGuY" ,id:93, name:"गांधी युग 01"},
    {url:"7RqnXt6VjNc" ,id:94, name:"गांधी युग 02"},
    {url:"Ti6UCUYLSeg" ,id:95, name:"गांधी युग 03"},
    {url:"B1wC-as3SiE" ,id:96, name:"असहयोग आंदोलन"},
    {url:"e7W7T9pxlBU" ,id:97, name:"History 107 (स्वराज दल , साइमन कमीशन)"},
    {url:"1zyHj2FBSB4" ,id:98, name:"History 108 ( सविनय अवज्ञा आंदोलन )"},
    {url:"hI46tXQ904w" ,id:99, name:"History 109 ( गोलमेज सम्मलेन  )"},
    {url:"ItBTbWBsZug" ,id:100, name:"History 110 ( हरिजन सेवक संघ , व्यक्तिगत सत्याग्रह )"},
    
  ]

  


  export default HistoryVideo