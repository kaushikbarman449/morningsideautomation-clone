import ClickButton from "./ClickButton"
import MaxWidthWrapper from "./MaxWithWrapper"

const MoneyPlan = [
    {
        id: 16,
        title: 'Monthly',
        desc: 'No minimum commitment. Pause or cancel anytime.',
        price: {
            a: '$8,450/m',
            b: '$6,000/m',
        },
        type: 'Beta',
        benefits: {
            heading: "What's in the plan: ",
            i: '1 Hour workshop call monthly to identify the best automations for your business',
            ii: 'One request at a time',
            iii: 'Unlimited users',
            iv: 'Easy credit card payments',
            v: 'Pause or cancel anytime'
        },
    },
    {
        id: 17,
        title: 'Quarterly',
        desc: 'Save $1,700 per month',
        price: { a: '$6,750/m', },
        benefits: {
            heading: "What's in the plan: ",
            i: '1 Hour workshop call monthly to identify the best automations for your business',
            ii: 'One request at a time',
            iii: 'Unlimited users',
            iv: 'Easy credit card payments',
            v: 'Pause or cancel anytime'
        },
    },
    {
        id: 18,
        title: 'Yearly',
        desc: 'Save $3,000 per month',
        price: { a: '$5,450/m' },
        benefits: {
            heading: "What's in the plan: ",
            i: '1 Hour workshop call monthly to identify the best automations for your business',
            ii: 'One request at a time',
            iii: 'Unlimited users',
            iv: 'Easy credit card payments',
            v: 'Pause or cancel anytime'
        },
    },
]

const Plans = () => {
    return (
        <>
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col md:flex-row items-center justify-between">
                <div className="text-left basis-5/12">
                    <h2 className="max-w-7xl text-3xl font-bold md:text-4xl lg:text-5xl">Subscriptions</h2>
                    <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                        We have three levels of subscriptions: choose the plan that works best for you and get access to a wide range of benefits and features.
                    </p>
                </div>
                <div className="flex items-end gap-2">
                    <svg
                        width={141}
                        height={123}
                        viewBox="0 0 141 123"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.721 52.0779L24.8903 41.5533L26.5743 40.9404L30.4049 51.465L28.721 52.0779ZM33.6663 50.2779L30.5143 41.6177C30.2443 40.876 30.2448 40.2146 30.5157 39.6336C30.7917 39.0507 31.3081 38.6215 32.0648 38.3461C32.3405 38.2458 32.602 38.1846 32.8494 38.1627C33.1 38.1339 33.3422 38.1366 33.576 38.1707L33.7438 39.5909C33.5693 39.5636 33.4089 39.5596 33.2626 39.5788C33.1164 39.5979 32.9781 39.6312 32.8478 39.6787C32.5421 39.7899 32.3198 39.9588 32.1809 40.1853C32.047 40.41 32.0484 40.7103 32.1852 41.0862L32.6039 42.2363L34.5584 41.5249L35.0564 42.8931L33.1018 43.6045L35.3127 49.6787L33.6663 50.2779ZM29.9595 44.7483L29.4615 43.3801L31.1755 42.7562L31.6735 44.1244L29.9595 44.7483ZM44.3163 50.2157C44.0457 50.3142 43.7691 50.3808 43.4866 50.4155C43.2041 50.4502 42.9111 50.4405 42.6076 50.3864L42.4691 48.8363C42.661 48.8799 42.8587 48.8931 43.0624 48.8757C43.2661 48.8583 43.4406 48.8232 43.5859 48.7703C43.9367 48.6426 44.1823 48.4596 44.3226 48.2213C44.4628 47.9829 44.5277 47.6698 44.5171 47.2821L44.5025 46.4701L38.8181 39.9746L40.6298 39.3151L44.791 44.3389L44.6968 37.8349L46.4484 37.1974L46.3309 46.8858C46.3175 47.5661 46.2281 48.1236 46.0628 48.5584C45.8994 48.9981 45.6684 49.3461 45.3701 49.6023C45.0735 49.8634 44.7223 50.0679 44.3163 50.2157ZM53.8527 43.1861C53.0759 43.4688 52.317 43.5436 51.576 43.4103C50.8383 43.2702 50.188 42.9648 49.6251 42.4943C49.0604 42.0188 48.6476 41.4226 48.3868 40.706C48.1934 40.1747 48.1087 39.638 48.1327 39.0958C48.1599 38.5467 48.2873 38.0236 48.515 37.5264C48.7477 37.0273 49.0713 36.5832 49.4859 36.194C49.9004 35.8047 50.4008 35.5034 50.9872 35.2899C51.764 35.0072 52.5213 34.9359 53.2591 35.076C54 35.2093 54.6528 35.5137 55.2175 35.9893C55.7804 36.4598 56.1923 37.0534 56.4531 37.7701C56.6446 38.2963 56.7268 38.834 56.6996 39.383C56.6775 39.9303 56.5525 40.4525 56.3249 40.9497C56.0972 41.4469 55.7761 41.8901 55.3615 42.2794C54.947 42.6686 54.444 42.9709 53.8527 43.1861ZM53.3191 41.7202C53.7802 41.5524 54.1522 41.3035 54.435 40.9735C54.7211 40.6367 54.8994 40.2454 54.9699 39.7998C55.0403 39.3541 54.9835 38.8782 54.7992 38.372C54.615 37.8658 54.3527 37.4647 54.0122 37.1686C53.6699 36.8676 53.2819 36.6824 52.8481 36.6133C52.4193 36.5424 51.9743 36.5908 51.5132 36.7586C51.0522 36.9264 50.6777 37.1762 50.3898 37.508C50.107 37.838 49.9312 38.2283 49.8625 38.679C49.797 39.1228 49.8564 39.5978 50.0406 40.104C50.2249 40.6102 50.4872 41.0113 50.8277 41.3074C51.1682 41.6035 51.5537 41.7895 51.9843 41.8655C52.4181 41.9346 52.8631 41.8862 53.3191 41.7202ZM62.4225 40.0669C61.756 40.3095 61.1564 40.3774 60.6237 40.2704C60.0942 40.1567 59.6414 39.9185 59.2654 39.5559C58.8893 39.1933 58.6065 38.7514 58.4168 38.2302L56.6848 33.4716L58.3386 32.8696L59.9585 37.32C60.1445 37.8312 60.4444 38.1875 60.8582 38.3887C61.2752 38.5832 61.7518 38.5828 62.2881 38.3876C62.6389 38.2599 62.9239 38.0683 63.143 37.8126C63.3602 37.5519 63.4971 37.2495 63.5535 36.9055C63.6149 36.5596 63.5772 36.1987 63.4404 35.8229L61.8944 31.5754L63.5483 30.9735L66.2571 38.4159L64.7686 38.9576L64.4485 38.0781C64.2855 38.5347 64.0391 38.9337 63.7093 39.2751C63.3827 39.6096 62.9538 39.8736 62.4225 40.0669ZM72.2427 36.2373L68.3026 25.412L69.9565 24.8101L71.7405 29.7115L71.2681 29.4663C71.4311 28.8848 71.7045 28.3965 72.0885 28.0013C72.4707 27.6011 72.9199 27.3071 73.4361 27.1192C74.1127 26.873 74.7267 26.8056 75.2781 26.917C75.8276 27.0235 76.2936 27.2512 76.676 27.6001C77.0584 27.949 77.3344 28.3565 77.5041 28.8226L79.2716 33.679L77.6178 34.2809L76.0226 29.8982C75.8329 29.377 75.5158 29.0128 75.0715 28.8056C74.6272 28.5984 74.1235 28.5944 73.5603 28.7937C73.1895 28.9287 72.8913 29.1309 72.6658 29.4002C72.4385 29.6646 72.296 29.9747 72.2382 30.3306C72.1855 30.6846 72.2302 31.0571 72.3725 31.448L73.8966 35.6353L72.2427 36.2373ZM84.7247 31.9496C83.983 32.2196 83.2645 32.2881 82.5691 32.1553C81.8769 32.0156 81.2603 31.7093 80.7193 31.2365C80.1815 30.7569 79.7749 30.1387 79.4994 29.3819C79.2933 28.8156 79.1954 28.2581 79.2057 27.7095C79.216 27.1609 79.3243 26.6476 79.5306 26.1695C79.7369 25.6915 80.0375 25.2699 80.4324 24.9048C80.8274 24.5397 81.3005 24.2568 81.8518 24.0562C82.5835 23.7898 83.2515 23.7227 83.8557 23.8546C84.465 23.9848 84.9893 24.248 85.4286 24.6443L85.3242 25.0824L84.6702 23.2857L86.1437 22.7494L88.8525 30.1918L87.379 30.7281L86.7251 28.9314L87.0867 29.1999C87.0049 29.7859 86.7724 30.3246 86.3894 30.8159C86.0113 31.3054 85.4565 31.6833 84.7247 31.9496ZM84.4092 30.4043C84.8603 30.2401 85.2272 29.9931 85.5101 29.6631C85.7911 29.3281 85.9644 28.9387 86.0299 28.4949C86.1004 28.0492 86.0435 27.5733 85.8593 27.0671C85.675 26.5609 85.4127 26.1598 85.0722 25.8637C84.7349 25.5608 84.3519 25.3739 83.9231 25.3029C83.4943 25.232 83.0544 25.2786 82.6033 25.4427C82.1473 25.6087 81.7778 25.8567 81.4949 26.1867C81.2171 26.5149 81.0438 26.9043 80.9752 27.3549C80.9047 27.8006 80.9615 28.2765 81.1458 28.7827C81.33 29.2889 81.5923 29.69 81.9328 29.9861C82.2733 30.2821 82.6563 30.4691 83.0819 30.5469C83.5107 30.6178 83.9531 30.5703 84.4092 30.4043ZM93.0033 28.681L87.5131 22.251L89.3248 21.5916L93.5763 26.8635L93.3282 26.9538L93.1587 20.1962L94.9178 19.5559L94.8978 27.9915L93.0033 28.681ZM102.401 25.5159C101.599 25.8077 100.836 25.9012 100.111 25.7961C99.3841 25.6861 98.7427 25.3974 98.1866 24.93C97.6356 24.4609 97.2178 23.8354 96.9333 23.0535C96.7253 22.4822 96.6315 21.9204 96.6518 21.3681C96.6704 20.8109 96.7928 20.2896 97.0191 19.8042C97.2454 19.3189 97.5611 18.8918 97.966 18.5231C98.376 18.1525 98.8642 17.8642 99.4305 17.658C100.047 17.4337 100.636 17.3442 101.197 17.3896C101.757 17.43 102.266 17.5882 102.724 17.8642C103.187 18.1383 103.579 18.5148 103.901 18.9936C104.226 19.4656 104.455 20.0237 104.587 20.668L98.6481 22.8295C98.8004 23.2792 99.0404 23.6346 99.3681 23.8956C99.694 24.1515 100.081 24.3029 100.529 24.3497C100.983 24.3947 101.47 24.3223 101.991 24.1326C102.412 23.9794 102.796 23.769 103.141 23.5014C103.489 23.227 103.778 22.9062 104.008 22.5388L105.079 23.494C104.91 23.777 104.68 24.0507 104.39 24.3151C104.099 24.5745 103.78 24.8067 103.435 25.0119C103.092 25.222 102.747 25.39 102.401 25.5159ZM98.3025 21.5761L102.52 20.0411C102.301 19.4853 101.96 19.1099 101.497 18.915C101.04 18.7183 100.495 18.7349 99.8635 18.9647C99.2521 19.1873 98.8018 19.5328 98.5126 20.0013C98.2284 20.468 98.1584 20.9929 98.3025 21.5761ZM43.2364 73.7823L41.477 68.9485L41.9494 69.1937C41.7919 69.7902 41.5152 70.3166 41.1194 70.7728C40.7217 71.224 40.1846 71.5728 39.5081 71.819C38.7713 72.0872 38.056 72.1489 37.362 72.0042C36.6661 71.8545 36.0518 71.5389 35.519 71.0574C34.9862 70.576 34.5866 69.9694 34.3203 69.2377C34.1142 68.6713 34.0138 68.1148 34.0191 67.568C34.0294 67.0194 34.1352 66.507 34.3365 66.0307C34.5377 65.5545 34.8308 65.1357 35.2157 64.7742C35.6007 64.4128 36.0663 64.1326 36.6125 63.9338C37.1287 63.7459 37.6103 63.6501 38.0573 63.6463C38.5043 63.6426 38.9138 63.7149 39.2856 63.8633C39.6607 64.0049 39.9959 64.2007 40.2912 64.4508L40.1875 64.9143L39.5362 63.1251L41.0247 62.5833L44.8827 73.1831L43.2364 73.7823ZM39.2527 70.2519C39.7137 70.0841 40.0857 69.8352 40.3686 69.5052C40.6546 69.1684 40.8329 68.7771 40.9034 68.3315C40.9739 67.8858 40.917 67.4099 40.7328 66.9037C40.5485 66.3975 40.2862 65.9964 39.9457 65.7003C39.6034 65.3992 39.2154 65.2141 38.7816 65.145C38.3528 65.074 37.9079 65.1225 37.4468 65.2903C36.9907 65.4563 36.6187 65.7052 36.3309 66.037C36.048 66.367 35.8722 66.7573 35.8036 67.208C35.7331 67.6536 35.7899 68.1295 35.9742 68.6357C36.1584 69.1419 36.4208 69.543 36.7612 69.8391C37.1017 70.1352 37.4872 70.3212 37.9178 70.3972C38.3466 70.4681 38.7916 70.4197 39.2527 70.2519ZM48.9874 68.3688C48.3209 68.6114 47.7213 68.6793 47.1886 68.5723C46.6591 68.4586 46.2063 68.2204 45.8303 67.8578C45.4542 67.4952 45.1714 67.0533 44.9817 66.5321L43.2497 61.7735L44.9035 61.1715L46.5233 65.6219C46.7094 66.1331 47.0093 66.4894 47.4231 66.6906C47.8401 66.8851 48.3167 66.8847 48.853 66.6895C49.2038 66.5618 49.4888 66.3702 49.7079 66.1145C49.9251 65.8538 50.062 65.5514 50.1184 65.2074C50.1798 64.8615 50.1421 64.5006 50.0053 64.1247L48.4593 59.8773L50.1132 59.2754L52.822 66.7177L51.3335 67.2595L51.0134 66.38C50.8504 66.8366 50.604 67.2356 50.2742 67.577C49.9476 67.9115 49.5187 68.1755 48.9874 68.3688ZM58.6023 64.8693C57.8004 65.1612 57.037 65.2546 56.312 65.1495C55.5852 65.0395 54.9437 64.7508 54.3877 64.2834C53.8367 63.8143 53.4189 63.1888 53.1343 62.407C52.9264 61.8356 52.8326 61.2738 52.8529 60.7216C52.8714 60.1643 52.9939 59.643 53.2202 59.1576C53.4465 58.6723 53.7621 58.2452 54.1671 57.8765C54.5771 57.5059 55.0652 57.2176 55.6316 57.0115C56.248 56.7871 56.8369 56.6976 57.3983 56.743C57.9579 56.7834 58.4666 56.9416 58.9247 57.2176C59.3877 57.4918 59.7801 57.8682 60.102 58.347C60.427 58.819 60.6557 59.3771 60.788 60.0214L54.8491 62.1829C55.0014 62.6326 55.2415 62.988 55.5692 63.249C55.895 63.505 56.2821 63.6563 56.7305 63.7031C57.1839 63.7481 57.6712 63.6758 58.1924 63.4861C58.6134 63.3328 58.9966 63.1224 59.3419 62.8549C59.6904 62.5804 59.9794 62.2596 60.2089 61.8923L61.2802 62.8474C61.1108 63.1305 60.8813 63.4042 60.5915 63.6685C60.3 63.9279 59.9816 64.1601 59.6362 64.3653C59.2927 64.5754 58.9481 64.7434 58.6023 64.8693ZM54.5036 60.9295L58.7209 59.3945C58.5016 58.8387 58.1607 58.4633 57.6981 58.2685C57.2406 58.0718 56.6961 58.0883 56.0646 58.3182C55.4532 58.5407 55.0028 58.8862 54.7136 59.3547C54.4295 59.8214 54.3594 60.3463 54.5036 60.9295ZM66.3165 62.053C65.7001 62.2774 65.0918 62.3995 64.4917 62.4192C63.8916 62.439 63.3548 62.3676 62.8814 62.2051L63.0648 60.7677C63.5091 60.9124 63.975 60.9841 64.4626 60.9826C64.9551 60.9792 65.4119 60.9009 65.8329 60.7477C66.319 60.5708 66.6664 60.3479 66.875 60.079C67.0836 59.8101 67.1323 59.5228 67.021 59.217C66.9152 58.9264 66.7199 58.7562 66.4351 58.7067C66.1535 58.6502 65.6596 58.6654 64.9534 58.7522C63.945 58.8979 63.1631 58.8703 62.6076 58.6695C62.0553 58.4619 61.6633 58.0398 61.4316 57.4034C61.2693 56.9573 61.2489 56.5192 61.3704 56.089C61.4951 55.652 61.7399 55.2564 62.1048 54.9023C62.4697 54.5481 62.9378 54.2671 63.5091 54.0591C64.0654 53.8566 64.6183 53.7462 65.1679 53.7278C65.7155 53.7044 66.2218 53.7699 66.6866 53.9242L66.5435 55.3555C66.2979 55.2576 66.0304 55.1932 65.741 55.1623C65.4517 55.1314 65.1573 55.1335 64.858 55.1687C64.5618 55.197 64.2784 55.2605 64.0078 55.359C63.5868 55.5122 63.2736 55.7198 63.0682 55.9819C62.8659 56.2371 62.8168 56.5076 62.9208 56.7932C63.0284 57.0889 63.233 57.2613 63.5347 57.3105C63.8364 57.3596 64.3184 57.343 64.9809 57.2608C66.0198 57.1211 66.8111 57.1509 67.3547 57.3503C67.8984 57.5498 68.2833 57.9602 68.5095 58.5816C68.6828 59.0578 68.7064 59.5202 68.5803 59.9691C68.4524 60.413 68.1935 60.8165 67.8035 61.1798C67.4186 61.5412 66.9229 61.8323 66.3165 62.053ZM74.3651 59.1321C73.6384 59.3966 72.9805 59.3977 72.3912 59.1354C71.802 58.8731 71.3496 58.3085 71.034 57.4414L68.3854 50.1645L70.0393 49.5625L70.83 51.7351L72.8973 50.9826L73.3953 52.3508L71.328 53.1033L72.5565 56.4786C72.7462 56.9999 72.978 57.3327 73.2519 57.477C73.529 57.6145 73.848 57.6176 74.2088 57.4863C74.3842 57.4225 74.5423 57.3422 74.6831 57.2456C74.8239 57.1489 74.945 57.0452 75.0466 56.9345L75.8268 58.1659C75.6515 58.3546 75.4362 58.5351 75.1811 58.7074C74.9328 58.8829 74.6608 59.0245 74.3651 59.1321ZM68.0428 54.299L67.5448 52.9308L69.3942 52.2577L69.8921 53.6259L68.0428 54.299ZM77.6161 57.6934L74.9073 50.2511L76.5612 49.6491L79.27 57.0915L77.6161 57.6934ZM75.25 48.6195C74.9543 48.7271 74.664 48.7249 74.3792 48.6129C74.0944 48.5009 73.8954 48.2895 73.7823 47.9788C73.6711 47.6731 73.6885 47.3858 73.8347 47.1169C73.9791 46.843 74.1991 46.6523 74.4948 46.5446C74.7905 46.437 75.0816 46.4417 75.3683 46.5587C75.6531 46.6707 75.8512 46.8796 75.9624 47.1853C76.0755 47.496 76.059 47.7858 75.9128 48.0547C75.7666 48.3236 75.5457 48.5118 75.25 48.6195ZM85.0383 55.2474C84.2615 55.5301 83.5026 55.6048 82.7617 55.4716C82.0239 55.3314 81.3736 55.0261 80.8107 54.5556C80.246 54.08 79.8332 53.4839 79.5724 52.7673C79.379 52.236 79.2944 51.6993 79.3183 51.157C79.3455 50.608 79.473 50.0848 79.7006 49.5876C79.9333 49.0886 80.2569 48.6445 80.6715 48.2552C81.086 47.866 81.5865 47.5646 82.1728 47.3512C82.9496 47.0685 83.7069 46.9972 84.4447 47.1373C85.1856 47.2706 85.8384 47.575 86.4031 48.0506C86.966 48.5211 87.3779 49.1147 87.6387 49.8314C87.8302 50.3576 87.9124 50.8952 87.8852 51.4443C87.8631 51.9916 87.7382 52.5138 87.5105 53.011C87.2828 53.5082 86.9617 53.9514 86.5472 54.3406C86.1326 54.7299 85.6297 55.0321 85.0383 55.2474ZM84.5047 53.7815C84.9658 53.6136 85.3378 53.3647 85.6206 53.0348C85.9067 52.698 86.085 52.3067 86.1555 51.8611C86.226 51.4154 86.1691 50.9395 85.9849 50.4333C85.8006 49.9271 85.5383 49.526 85.1978 49.2299C84.8555 48.9288 84.4675 48.7437 84.0337 48.6746C83.6049 48.6036 83.1599 48.6521 82.6989 48.8199C82.2378 48.9877 81.8633 49.2375 81.5754 49.5693C81.2926 49.8993 81.1168 50.2896 81.0481 50.7403C80.9826 51.1841 81.042 51.6591 81.2263 52.1653C81.4105 52.6715 81.6728 53.0726 82.0133 53.3687C82.3538 53.6648 82.7393 53.8508 83.1699 53.9268C83.6037 53.9959 84.0487 53.9475 84.5047 53.7815ZM90.6544 52.9479L87.9456 45.5055L89.5994 44.9036L89.9442 45.8508C90.1035 45.3217 90.3558 44.8922 90.7011 44.5622C91.0446 44.2272 91.4368 43.9794 91.8779 43.8189C92.5594 43.5708 93.1725 43.5009 93.7171 43.6092C94.2616 43.7175 94.7191 43.9454 95.0897 44.293C95.4653 44.6387 95.7351 45.0371 95.8993 45.4881L97.6833 50.3896L96.0294 50.9915L94.4315 46.6013C94.2381 46.07 93.9227 45.7024 93.4852 45.4984C93.0527 45.2926 92.5533 45.2927 91.987 45.4989C91.6162 45.6338 91.3155 45.8369 91.085 46.1081C90.8595 46.3775 90.7179 46.6901 90.6602 47.046C90.6006 47.3969 90.6419 47.7678 90.7842 48.1587L92.3082 52.3459L90.6544 52.9479ZM102.495 48.8853C101.878 49.1096 101.27 49.2317 100.67 49.2515C100.07 49.2712 99.533 49.1999 99.0595 49.0373L99.243 47.5999C99.6873 47.7447 100.153 47.8163 100.641 47.8148C101.133 47.8114 101.59 47.7332 102.011 47.5799C102.497 47.403 102.845 47.1801 103.053 46.9112C103.262 46.6423 103.31 46.355 103.199 46.0493C103.093 45.7586 102.898 45.5885 102.613 45.5389C102.332 45.4825 101.838 45.4976 101.132 45.5844C100.123 45.7301 99.3413 45.7025 98.7858 45.5017C98.2335 45.2941 97.8415 44.8721 97.6098 44.2356C97.4475 43.7895 97.4271 43.3514 97.5486 42.9212C97.6733 42.4842 97.9181 42.0887 98.283 41.7345C98.6479 41.3803 99.116 41.0993 99.6873 40.8913C100.244 40.6889 100.797 40.5784 101.346 40.5601C101.894 40.5367 102.4 40.6021 102.865 40.7564L102.722 42.1877C102.476 42.0898 102.209 42.0254 101.919 41.9945C101.63 41.9636 101.336 41.9658 101.036 42.0009C100.74 42.0293 100.457 42.0927 100.186 42.1912C99.765 42.3444 99.4518 42.5521 99.2463 42.8141C99.0441 43.0694 98.995 43.3398 99.0989 43.6255C99.2066 43.9212 99.4112 44.0936 99.7129 44.1427C100.015 44.1918 100.497 44.1753 101.159 44.093C102.198 43.9533 102.989 43.9831 103.533 44.1826C104.077 44.382 104.461 44.7924 104.688 45.4139C104.861 45.89 104.885 46.3525 104.758 46.8013C104.631 47.2452 104.372 47.6487 103.982 48.012C103.597 48.3735 103.101 48.6645 102.495 48.8853ZM107.502 43.1294C107.17 42.6206 106.954 42.1852 106.857 41.8235C106.762 41.4549 106.771 41.1113 106.882 40.7928C106.993 40.4742 107.192 40.1263 107.481 39.7489C107.877 39.2303 108.118 38.8246 108.204 38.5321C108.291 38.2395 108.283 37.9529 108.181 37.6723C108.018 37.2262 107.739 36.9504 107.343 36.8448C106.945 36.7342 106.461 36.7829 105.89 36.9908C105.479 37.1404 105.129 37.333 104.84 37.5687C104.551 37.8043 104.306 38.0751 104.105 38.3809L103.169 37.1639C103.281 36.9583 103.452 36.7428 103.682 36.5171C103.911 36.2865 104.191 36.0679 104.525 35.8614C104.857 35.6499 105.23 35.4684 105.646 35.317C106.288 35.0836 106.9 34.9799 107.483 35.0062C108.064 35.0274 108.571 35.1806 109.004 35.4657C109.44 35.744 109.756 36.1513 109.951 36.6875C110.062 36.9932 110.112 37.3015 110.1 37.6122C110.091 37.9162 110.005 38.2484 109.841 38.6088C109.677 38.9693 109.425 39.382 109.083 39.8469C108.839 40.1741 108.677 40.4628 108.598 40.713C108.517 40.9581 108.517 41.2222 108.597 41.5051C108.675 41.7831 108.832 42.1348 109.066 42.5603L107.502 43.1294ZM109.619 46.3009C109.298 46.4176 108.985 46.4152 108.68 46.2936C108.374 46.172 108.161 45.9459 108.041 45.6151C107.959 45.3896 107.94 45.175 107.985 44.9713C108.029 44.7626 108.122 44.5812 108.264 44.4271C108.41 44.2663 108.591 44.1466 108.806 44.0682C109.132 43.9496 109.447 43.9511 109.753 44.0727C110.056 44.1892 110.27 44.4179 110.394 44.7587C110.474 44.9792 110.49 45.1947 110.442 45.4053C110.397 45.6089 110.301 45.7887 110.153 45.9446C110.012 46.1037 109.834 46.2224 109.619 46.3009Z"
                            fill="black"
                        />
                        <path
                            d="M86.9651 78.9376L86.5989 78.283L85.2898 79.0154L85.656 79.6699L86.9651 78.9376ZM139.757 118.101C140.09 117.855 140.16 117.385 139.913 117.052L135.891 111.631C135.644 111.299 135.174 111.229 134.842 111.476C134.509 111.723 134.439 112.192 134.686 112.525L138.261 117.344L133.443 120.919C133.11 121.166 133.041 121.635 133.287 121.968C133.534 122.301 134.004 122.37 134.337 122.123L139.757 118.101ZM85.656 79.6699C88.2754 84.3521 94.8354 92.968 104.126 100.918C113.419 108.869 125.51 116.213 139.201 118.241L139.42 116.757C126.111 114.785 114.273 107.627 105.101 99.7782C95.9275 91.9283 89.4875 83.4464 86.9651 78.9376L85.656 79.6699Z"
                            fill="black"
                        />
                    </svg>
                    <div className="bg-red-300">
                        <ClickButton name="Book a call" className="hover:bg-black hover:text-white duration-300" />
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 max-w-4xl mx-auto">
                {MoneyPlan.map(data => (
                    <div key={data.id} className={`${data.title === 'Monthly' ? 'bg-[#381B75]' : 'bg-[#101624]'}  p-8 z-10 flex flex-col justify-center`}>
                        <h3 className="text-2xl font-semibold text-white text-left">{data.title}</h3>
                        <p className="text-gray-400 text-left text-sm mt-4">{data.desc}</p>
                        <div className="my-8 border-t border-white/10 rounded-xl w-full"></div>
                        <div className="flex justify-center flex-col">
                            {Object.values(data.price).map((item, index) => (
                                <h4 className={`text-2xl font-semibold text-center ${item === '$8,450/m' && 'line-through'} ${item === '$6,000/m' ? 'text-red-500' : 'text-white'}`} key={index}>{item}
                                    {item === '$6,000/m' && <span className="ml-2 align-middle mb-1 max-h-5 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">{data.type}</span>}
                                </h4>
                            ))}
                        </div>
                        <div className="my-8 border-t border-white/10 rounded-xl w-full"></div>
                        <h5 className="text-white text-sm font-medium text-left">{data.benefits.heading}</h5>
                        {Object.values(data.benefits).map((datas, index) => (
                            <>
                                <ul key={index} className="text-gray-400 text-xs">
                                    <li className="mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline-block my-auto mr-2 h-2 w-2"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"></path></svg>
                                        <span>{datas}</span>
                                    </li>
                                </ul>
                            </>
                        ))}
                        <ClickButton name={data.title === 'Monthly' ? "Apply For Beta" : "Currently Unavailable"} className={`mt-8 ${data.title != 'Monthly' && 'bg-[#14172c] text-white pointer-events-none'}`} />
                    </div>
                ))}
            </div>
            <div className="mt-16 mx-auto max-w-md text-gray-600 text-center tracking-tighter"><p>We&apos;re thrilled to welcome eight new companies to our Morningside Automation beta test, offering discounted rates for their crucial feedback on our services. Apply now for a chance to join this pioneering initiative.</p></div>
        </>
    )
}

export default Plans