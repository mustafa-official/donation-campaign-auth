import { Button, Input, Typography } from "@material-tailwind/react";

const Banner = ({value, setValue, handleSearch }) => { 
 const clearInput = ()=>{
  setValue('')
 }
  return (
    <div className="h-[450px] flex relative flex-col justify-center items-center border">
      <div className="bg-[url('assets/banner.png')] inset-0 opacity-10 absolute bg-center bg-cover bg-no-repeat"></div>
      <Typography variant="h2">Material Tailwind</Typography>
      <div className="relative mt-4 flex w-full max-w-[24rem]">
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          label="Email Address"
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          onClick={() => {
            handleSearch();
            clearInput()
          }}
          size="sm"
          color="red"
          className="!absolute right-1 top-1 rounded"
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default Banner;
