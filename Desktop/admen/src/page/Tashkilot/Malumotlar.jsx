import "./Malumotlar.scss";
import { Flex, Input } from "antd";
import { Button, ConfigProvider, Space } from "antd";

const Malumotlar = () => {
  return (
    <div className=" font-poppins text-base container mx-auto">
      <h1 className="wan text-center font-bold text-black pb-7 text-xl mt-10">
        Tashkilotlar
      </h1>
      <div>
        <p className="font-bold text-base">Logoni yuklang (Faqat ,PNG fayl)</p>
      </div>
      <form action="Input" className="mt-6">
        {/* Vazirlek */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Vazirlik"
          variant="filled"
          value={vazirlek}
        />
{/* Viloyat */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Viloyat"
          variant="filled"
          value={viloyat}
        />
{/* Tuman yokiy Shahar */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tuman yokiy Shahar"
          variant="filled"
          value={tuman}
        />
{/* Manzil */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Manzil"
          variant="filled"
          value={manzil}
        />
{/* tashkilot nomi Uzb */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tashkilot nomi Uz Lotin"
          variant="filled"
          value={Tashkilotnomi}
        />
{/* tashkilot nome Uz Kiril */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tashkilot nomi Uz Kiril"
          variant="filled"
        />
{/* tashkilot nomi ru */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tashkilot nomi Ru"
          variant="filled"
        />
{/* tashkilot nomi Eng */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tashkilot nomi Eng"
          variant="filled"
        />
{/* web site */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="web site"
          variant="filled"
        />
{/* tashkilot qisqa nomi */}
        <Input
          className="font-poppins text-base py-3 mt-6"
          placeholder="Tashkilot Qisqa Nomi"
          variant="filled"
        />
{/* Saqlash */}
        <Button className="mt-[10px]" type="primary" size="large">
          Saqlash
        </Button>
      </form>
    </div>
  );
};

export default Malumotlar;
