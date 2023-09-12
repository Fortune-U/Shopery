import '../Styles/category.css';

export default function Category() {
    return(
        <div className="category-wrapper">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M77.5002 44.9375V47.5625C77.5002 51.9875 75.6502 56.1875 72.4377 59.2125L67.5752 58.475C69.1377 55.9 70.0002 52.9 70.0002 49.8V45.2C70.0002 42.6125 69.4002 40.1 68.3002 37.85C67.4877 36.175 66.3752 34.65 65.0127 33.3375L65.0252 33.325C65.7252 32.05 67.0627 31.25 68.5502 31.25C69.4127 31.25 70.2502 31.525 70.9502 32.0375C75.0752 35.0875 77.5002 39.8625 77.5002 44.9375Z" fill="#FCD770"/>
  <path d="M63.55 32.05C64.075 32.45 64.575 32.875 65.0125 33.3375C66.375 34.65 67.4875 36.175 68.3 37.85C69.4 40.1 70 42.6125 70 45.2V49.8C70 52.9 69.1375 55.9 67.575 58.475L55.85 56.675V56.6625C55.2875 54.5 55 52.2875 55 50.0375V44.9625C55 43.225 55.175 41.4875 55.5125 39.7875C56.125 39.925 56.7875 40 57.5 40C60.2625 40 62.5 38.875 62.5 37.5C62.5 36.6125 61.575 35.8375 60.1875 35.4L60.5625 31.3C60.7625 31.2625 60.975 31.25 61.1875 31.25C62.0375 31.25 62.875 31.5375 63.55 32.05Z" fill="#FCD770"/>
  <path d="M48.4625 31.7875C49.125 32.1625 49.6625 32.7125 50.025 33.4V33.4125C46.8375 36.475 45 40.725 45 45.2V49.8C45 51.6375 45.3125 53.4375 45.9 55.1375L38.8875 54.0625C37.9875 52.0375 37.5 49.8375 37.5 47.5625V44.9375C37.5 44 37.5875 43.0625 37.75 42.15C37.8 41.8875 37.85 41.625 37.9125 41.3625C38.7625 37.675 40.9125 34.3625 44.05 32.0375C44.75 31.525 45.5875 31.25 46.45 31.25C47.175 31.25 47.8625 31.4375 48.4625 31.7875Z" fill="#FCD770"/>
  <path d="M54.4375 31.275L54.8125 35.4C53.425 35.8375 52.5 36.6125 52.5 37.5C52.5 38.525 53.7375 39.4 55.5125 39.7875C55.175 41.4875 55 43.225 55 44.9625V50.0375C55 52.2875 55.2875 54.5 55.85 56.6625L48 55.4625L45.9 55.1375C45.3125 53.4375 45 51.6375 45 49.8V45.2C45 40.725 46.8375 36.475 50.025 33.4125V33.4C50.525 32.9125 51.05 32.4625 51.6125 32.05C52.3125 31.5375 53.1625 31.25 54.0375 31.25C54.175 31.25 54.3 31.2625 54.425 31.275H54.4375Z" fill="#FCD770"/>
  <path d="M62.5 37.5C62.5 38.875 60.2625 40 57.5 40C56.7875 40 56.125 39.925 55.5125 39.7875C53.7375 39.4 52.5 38.525 52.5 37.5C52.5 36.6125 53.425 35.8375 54.8125 35.4L54.4375 31.275L53.7625 23.9125C53.75 23.8 53.75 23.7 53.75 23.5875C53.75 21.6 55.35 20 57.3375 20H57.6625C58.65 20 59.55 20.4 60.2 21.05C60.85 21.7 61.25 22.6 61.25 23.5875C61.25 23.7 61.25 23.8 61.2375 23.9125L60.5625 31.3L60.1875 35.4C61.575 35.8375 62.5 36.6125 62.5 37.5Z" fill="#CF9E76"/>
  <path d="M29.8875 7.6625C30.325 7.5625 30.7875 7.5 31.25 7.5C33.2875 7.5 35.1125 8.475 36.25 10L36.225 10.125C35.825 10.0375 35.425 10 35 10C32.4125 10 30.2 11.5625 29.25 13.8C29.0875 13.7875 28.925 13.75 28.75 13.75C25.6125 13.75 23.0375 16.075 22.5875 19.0875C18.9375 20.1375 16.25 23.5 16.25 27.5C16.25 30.9125 18.2 33.85 21.05 35.3C20.3875 36.2875 20 37.475 20 38.75C20 40.975 21.175 42.9125 22.925 44.025C22.6625 44.7125 22.5 45.4625 22.5 46.25C22.5 49.7 25.3 52.5375 28.75 52.5375C28.425 52.5125 28.1125 52.5 27.8 52.5H27.5C25.0625 52.5 22.7875 53.2 20.8625 54.4125L17.5 45C14.05 45 11.25 42.2 11.25 38.75C11.25 37.9625 11.4125 37.2125 11.675 36.525C9.925 35.4125 8.75 33.475 8.75 31.25C8.75 29.975 9.1375 28.7875 9.8 27.8C6.95 26.35 5 23.4125 5 20C5 16 7.6875 12.6375 11.3375 11.5875C11.7875 8.575 14.3625 6.25 17.5 6.25C17.675 6.25 17.8375 6.2875 18 6.3C18.95 4.0625 21.1625 2.5 23.75 2.5C26.825 2.5 29.375 4.725 29.8875 7.6625Z" fill="#8CC152"/>
  <path d="M46.95 25.625C48.0625 26.75 48.75 28.3 48.75 30C48.75 30.5875 48.6625 31.1625 48.5125 31.7L48.4625 31.7875C47.8625 31.4375 47.175 31.25 46.45 31.25C45.5875 31.25 44.75 31.525 44.05 32.0375C40.9125 34.3625 38.7625 37.675 37.9125 41.3625C37.85 41.625 37.8 41.8875 37.75 42.15C37.5875 43.0625 37.5 44 37.5 44.9375V47.5625C37.5 49.8375 37.9875 52.0375 38.8875 54.0625L29.7 52.65C29.375 52.6 29.0625 52.5625 28.75 52.5375C25.3 52.5375 22.5 49.7 22.5 46.25C22.5 45.4625 22.6625 44.7125 22.925 44.025C21.175 42.9125 20 40.975 20 38.75C20 37.475 20.3875 36.2875 21.05 35.3C18.2 33.85 16.25 30.9125 16.25 27.5C16.25 23.5 18.9375 20.1375 22.5875 19.0875C23.0375 16.075 25.6125 13.75 28.75 13.75C28.925 13.75 29.0875 13.7875 29.25 13.8C30.2 11.5625 32.4125 10 35 10C35.425 10 35.825 10.0375 36.225 10.125C38.7375 10.625 40.7 12.625 41.1375 15.1625C41.575 15.0625 42.0375 15 42.5 15C45.95 15 48.75 17.8 48.75 21.25C48.75 22.95 48.0625 24.5 46.95 25.625Z" fill="#B4DD7F"/>
  <path d="M8.5 62.5H15.25C15.0875 63.3 15 64.1375 15 65C15 65.8625 15.0875 66.7 15.25 67.5H8.5H5C4.3125 67.5 3.6875 67.225 3.2375 66.7625C2.775 66.3125 2.5 65.6875 2.5 65C2.5 63.625 3.625 62.5 5 62.5H8.5Z" fill="#B4DD7F"/>
  <path d="M8.9875 57.55L16.425 59.2125C15.8875 60.2375 15.4875 61.3375 15.25 62.5H8.5C7.2625 62.5 6.25 61.4875 6.25 60.25V59.75C6.25 58.5125 7.2625 57.5 8.5 57.5C8.6625 57.5 8.825 57.5125 8.9875 57.55Z" fill="#B4DD7F"/>
  <path d="M16.425 70.7875L8.9875 72.45C8.825 72.4875 8.6625 72.5 8.5 72.5C7.2625 72.5 6.25 71.4875 6.25 70.25V69.75C6.25 68.5125 7.2625 67.5 8.5 67.5H15.25C15.4875 68.6625 15.8875 69.7625 16.425 70.7875Z" fill="#B4DD7F"/>
  <path d="M76.1 61.2C75.2125 60.175 73.975 59.45 72.5625 59.2375L72.4375 59.2125L67.575 58.475L55.85 56.675V56.6625L48 55.4625L45.9 55.1375L38.8875 54.0625L29.7 52.65C29.375 52.6 29.0625 52.5625 28.75 52.5375C28.425 52.5125 28.1125 52.5 27.8 52.5H27.5C25.0625 52.5 22.7875 53.2 20.8625 54.4125C18.9875 55.5875 17.45 57.25 16.425 59.2125C15.8875 60.2375 15.4875 61.3375 15.25 62.5C15.0875 63.3 15 64.1375 15 65C15 65.8625 15.0875 66.7 15.25 67.5C15.4875 68.6625 15.8875 69.7625 16.425 70.7875C17.0125 71.9125 17.775 72.95 18.6625 73.8375C20.925 76.1 24.05 77.5 27.5 77.5H27.8C28.425 77.5 29.0625 77.45 29.7 77.35L48 74.5375L72.5625 70.7625C75.4 70.325 77.5 67.875 77.5 65C77.5 63.5625 76.975 62.225 76.1 61.2Z" fill="#FF826E"/>
  <path d="M78.75 44.9363C78.75 39.4938 76.1113 34.2962 71.6913 31.0337C70.79 30.3662 69.6725 30 68.5462 30C67.1363 30 65.815 30.5638 64.845 31.5225C64.6637 31.3713 64.4988 31.205 64.3113 31.0613C63.6175 30.5313 62.785 30.2162 61.93 30.0863L62.4813 24.025C62.4938 23.88 62.5 23.7338 62.5 23.5875C62.5 20.92 60.33 18.75 57.6625 18.75H57.3375C54.67 18.75 52.5 20.92 52.5 23.5875C52.5 23.7338 52.5062 23.88 52.52 24.0263L53.0737 30.1138C52.2812 30.2638 51.515 30.57 50.8675 31.0525C50.6437 31.22 50.445 31.4125 50.23 31.5887C50.1187 31.4737 50.0012 31.3663 49.88 31.2625C49.9512 30.8463 50 30.425 50 30C50 28.4125 49.505 26.8937 48.5875 25.625C49.505 24.3563 50 22.8388 50 21.25C50 16.97 46.3787 13.5012 42.0638 13.7638C41.2612 11.4637 39.39 9.73 37.09 9.06125C35.5675 7.1625 33.2725 6.10875 30.8137 6.26375C29.7787 3.2975 26.9762 1.25 23.75 1.25C21.0438 1.25 18.58 2.6975 17.2525 5.00375C13.9425 5.115 11.0812 7.45125 10.2612 10.6337C6.39125 12.0775 3.75 15.8237 3.75 20C3.75 23.3487 5.3975 26.41 8.12375 28.26C7.7125 29.1987 7.5 30.2138 7.5 31.25C7.5 33.5 8.5 35.5913 10.2163 37.0075C10.0725 37.5875 10 38.1712 10 38.75C10 42.58 12.8875 45.75 16.6 46.1963L19.365 53.94C17.9487 54.9837 16.7425 56.29 15.8138 57.79L9.265 56.335C9.01625 56.2775 8.76 56.25 8.5025 56.25C6.57125 56.25 5 57.8212 5 59.7525V60.2475C5 60.5975 5.0675 60.93 5.16375 61.25H5C2.9325 61.25 1.25 62.9325 1.25 65C1.25 67.0675 2.9325 68.75 5 68.75H5.16375C5.0675 69.07 5 69.4025 5 69.7525V70.2475C5 72.1787 6.57125 73.75 8.5025 73.75C8.76 73.75 9.01625 73.7225 9.2625 73.6662L15.8138 72.21C18.24 76.1275 22.5637 78.75 27.5 78.75H27.7938C28.4888 78.75 29.1925 78.6963 29.8837 78.59L72.7475 71.9962C76.225 71.46 78.75 68.5188 78.75 65C78.75 62.1862 77.1212 59.765 74.6963 58.6237C77.2862 55.53 78.75 51.605 78.75 47.5637V44.9363ZM62.7913 33.0475C66.5225 35.9 68.75 40.4438 68.75 45.205V49.7963C68.75 52.3588 68.1113 54.8675 66.9075 57.1063L56.8838 55.5638C56.4712 53.75 56.25 51.8975 56.25 50.0375V44.9625C56.25 43.7025 56.3763 42.4438 56.5675 41.1963C56.8738 41.2225 57.1787 41.25 57.5 41.25C61.0638 41.25 63.75 39.6375 63.75 37.5C63.75 36.32 62.9338 35.2725 61.52 34.585L61.7038 32.5625C62.0938 32.6412 62.4688 32.7987 62.7913 33.0475ZM57.3375 21.25H57.6637C58.9525 21.25 60.0013 22.2988 60.0013 23.5875C60.0013 23.6588 59.9987 23.73 59.9912 23.8L58.8562 36.2838L59.81 36.59C60.905 36.94 61.25 37.4012 61.25 37.5C61.25 37.8112 59.92 38.75 57.5 38.75C55.08 38.75 53.75 37.8112 53.75 37.5C53.75 37.4012 54.095 36.94 55.19 36.5887L56.1438 36.2825L55.0088 23.8C55.0025 23.7288 55 23.6575 55 23.5875C55 22.2988 56.0487 21.25 57.3375 21.25ZM53.3 32.6038L53.48 34.585C52.0662 35.2725 51.25 36.32 51.25 37.5C51.25 38.8775 52.3738 40.0287 54.12 40.6787C53.8963 42.0975 53.75 43.53 53.75 44.9625V50.0375C53.75 51.755 53.915 53.47 54.235 55.1562L46.8662 54.0225C46.465 52.6487 46.25 51.2325 46.25 49.795V45.2037C46.25 40.45 48.535 35.9075 52.3625 33.055C52.6413 32.8475 52.9625 32.695 53.3 32.6038ZM39.7913 52.9338C39.1125 51.2163 38.75 49.4175 38.75 47.5637V44.935C38.75 40.2825 41.01 35.8375 44.7937 33.0425C45.2687 32.6925 45.8587 32.5 46.4537 32.5C47.2087 32.5 47.9037 32.8037 48.4125 33.3125C45.465 36.5425 43.75 40.785 43.75 45.205V49.7963C43.75 51.085 43.9038 52.36 44.1825 53.61L39.7913 52.9338ZM39.9087 15.3762L40.1363 16.6625L41.4113 16.3787C41.7988 16.2925 42.155 16.25 42.5 16.25C45.2575 16.25 47.5 18.4925 47.5 21.25C47.5 22.5637 46.99 23.8062 46.065 24.7487L45.205 25.625L46.065 26.5013C46.99 27.4438 47.5 28.6863 47.5 30C47.5 30.0375 47.4925 30.075 47.4925 30.1138C47.1537 30.0462 46.8087 30 46.4537 30C45.3275 30 44.21 30.3663 43.3088 31.0325C41.0337 32.7113 39.2425 34.9075 38.0275 37.3813C37.5538 35.9062 37.0563 34.4937 36.5438 33.1525C37.7 27.045 41.9888 23.51 42.0325 23.4737L41.25 22.5L40.4688 21.5238C40.295 21.6625 36.9137 24.4237 35.015 29.405C32.4137 23.4325 29.9587 19.5688 29.8013 19.3237L27.6975 20.6763C27.7313 20.7275 29.6375 23.7262 31.8563 28.5C28.1175 27.0925 23.8687 27.4812 23.625 27.5062L23.8738 29.9938C25.7538 29.805 31.0788 29.8962 33.5662 32.435C34.4425 34.5887 35.3062 36.95 36.0687 39.48C32.2687 37.5312 27.735 37.5 27.5 37.5V40C27.5588 40 33.1238 40.0375 36.4175 42.6562C36.315 43.4087 36.25 44.1688 36.25 44.9363V47.565C36.25 49.2537 36.51 50.905 36.9925 52.505L29.8837 51.4113C29.5087 51.3538 29.13 51.315 28.75 51.2875C25.9925 51.2875 23.75 49.0275 23.75 46.2513C23.75 45.6688 23.8662 45.0712 24.0938 44.4725L24.4587 43.5163L23.5925 42.9688C22.1263 42.0412 21.25 40.465 21.25 38.75C21.25 37.7663 21.5387 36.8125 22.085 35.99L22.8638 34.82L21.6112 34.1838C19.075 32.8938 17.5 30.3337 17.5 27.5C17.5 24.1737 19.735 21.2113 22.9363 20.295L23.7125 20.0725L23.8288 19.2738C24.185 16.8375 26.3013 15 28.75 15C28.7962 15 28.8412 15.01 28.8862 15.0162C28.9737 15.0287 29.0625 15.04 29.1512 15.0462L30.0475 15.1188L30.4 14.2912C31.1887 12.4437 32.9937 11.25 35 11.25C37.4225 11.25 39.4863 12.985 39.9087 15.3762ZM18.3813 43.75H17.5C14.7425 43.75 12.5 41.5075 12.5 38.75C12.5 38.1662 12.6162 37.5687 12.8438 36.9725L13.21 36.0163L12.3438 35.4688C10.8763 34.5412 10 32.965 10 31.25C10 30.2663 10.2888 29.3125 10.835 28.49L11.6138 27.32L10.3612 26.6838C7.825 25.3938 6.25 22.8337 6.25 20C6.25 16.6737 8.485 13.7113 11.685 12.795L12.4613 12.5725L12.5775 11.7737C12.935 9.3375 15.0513 7.5 17.5 7.5C17.5475 7.5 17.5938 7.51 17.64 7.51625C17.725 7.5275 17.81 7.53875 17.8975 7.54625L18.7975 7.62125L19.1513 6.79C19.9387 4.94375 21.7437 3.75 23.75 3.75C26.1725 3.75 28.2362 5.485 28.6588 7.87625L28.8862 9.1625L30.1612 8.87875C30.5487 8.7925 30.905 8.75 31.25 8.75C31.825 8.75 32.3713 8.87625 32.8938 9.05875C31.0563 9.59625 29.4737 10.8162 28.5025 12.5037C25.1925 12.615 22.3312 14.9513 21.5112 18.1338C17.6412 19.5775 15 23.3237 15 27.5C15 30.8487 16.6475 33.91 19.3737 35.76C18.9625 36.6987 18.75 37.7137 18.75 38.75C18.75 41 19.75 43.0912 21.4663 44.5087C21.3225 45.0887 21.25 45.6712 21.25 46.25C21.25 48.4463 22.195 50.42 23.6912 51.7975C22.9487 52.0125 22.235 52.2912 21.55 52.6225L18.3813 43.75ZM7.5 60.2475V59.7525C7.5 59.125 8.1075 58.6413 8.72125 58.7738L14.67 60.0962C14.525 60.4738 14.395 60.8575 14.2838 61.25H8.5025C7.95 61.25 7.5 60.8 7.5 60.2475ZM3.75 65C3.75 64.3112 4.31125 63.75 5 63.75H8.5025H13.8125C13.7762 64.1625 13.75 64.5775 13.75 65C13.75 65.4225 13.7762 65.8375 13.8137 66.25H8.5025H5C4.31125 66.25 3.75 65.6888 3.75 65ZM8.71875 71.2262C8.12625 71.3538 7.5 70.8737 7.5 70.2475V69.7525C7.5 69.2 7.95 68.75 8.5025 68.75H14.2825C14.3937 69.1425 14.525 69.5263 14.6687 69.9037L8.71875 71.2262ZM76.25 65C76.25 67.2763 74.6175 69.1787 72.3688 69.525L29.5062 76.1188C28.9387 76.2063 28.3625 76.25 27.7938 76.25H27.5C21.2975 76.25 16.25 71.2025 16.25 65C16.25 58.7975 21.2975 53.75 27.5 53.75H27.7938C28.3625 53.75 28.9387 53.7938 29.505 53.88L72.3675 60.4738C74.6175 60.8213 76.25 62.7238 76.25 65ZM76.25 47.5637C76.25 51.4087 74.6937 55.1287 71.9863 57.8862L69.5025 57.5037C70.6438 55.1062 71.25 52.4775 71.25 49.795V45.2037C71.25 40.7612 69.5575 36.4975 66.65 33.2625C67.155 32.7863 67.825 32.5 68.5462 32.5C69.1425 32.5 69.7313 32.6925 70.2063 33.045C73.99 35.8375 76.25 40.2838 76.25 44.9363V47.5637Z" fill="#1A1A1A"/>
  <path d="M26.25 58.75H28.75V71.25H26.25V58.75Z" fill="#1A1A1A"/>
  <path d="M36.25 58.75H38.75V71.25H36.25V58.75Z" fill="#1A1A1A"/>
  <path d="M46.25 58.75H48.75V71.25H46.25V58.75Z" fill="#1A1A1A"/>
  <path d="M56.25 61.25H58.75V68.75H56.25V61.25Z" fill="#1A1A1A"/>
  <path d="M66.25 62.5H68.75V67.5H66.25V62.5Z" fill="#1A1A1A"/>
</svg></div>
            <p className='cat-txt1'>Vegetables</p>
            <p className='cat-txt2'>175 Products</p>
        </div>
    );
}