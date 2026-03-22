const About = () => {

    return (
        <div className="w-ful">

            <div className="flex flex-col gap-2 items-center justify-center">
                <div tabIndex={0} className="w-1/2 collapse collapse-arrow border border-base-300 bg-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium text-right">
                        <p>
                            چشم انداز و ماموریت
                        </p>
                    </div>
                    <div className="collapse-content text-right">
                        <p className="leading-relaxed">
                            : چشم انداز
                            <br />
                            .                اگر مالیاتی قرار است پرداخت شود، با رینگ مستری راحت تر و اصولی تر انجام می شود         <br />
                            : ماموریت
                            <br />
                            جذب و حفظ مشتری با خدمات فوق العاده ارزشمند و توانمندسازی آنها برای ایجاد رقابت منصفانه و جامعه مالی قدرتمند
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="w-1/2  collapse collapse-arrow border border-base-300 bg-base-300 rounded-box">
                    <div className="collapse-title text-xl font-medium text-right">
                        <p>
                            تاریخچه شرکت
                        </p>
                    </div>
                    <div className="collapse-content text-right">
                        <p  className="leading-relaxed">
                            موسسه رینگ مستری قرن در فروردیم ماه 1986 فعالیت خود را در زمینه آموزش و پژوهش و خدمات مشاوره و حسابداری مالیاتی و نیز فعالیت های مرتبط با حوزه آموزش به مودیان مالیاتی در ارتباط با قانون پایانه های فروشگاهی و سامانه مودیان و تولید و فروش نرم افزار آغاز نموده است. این شرکت در حوزه ارائه خدمات مالی و مالیاتی، با اتکا به مجوزها و گواهینامه های رسمی و نیروهای متخصص، فعالیت می نماید. رسالت اصلی این مجموعه حفظ اطلاعات مالی صاحبان کسب و کار و بهبود نظام مالیاتی کشور می باشد.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;