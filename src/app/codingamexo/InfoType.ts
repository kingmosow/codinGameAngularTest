interface InfoType{
  name:string;
  profession : string
}

const settingUser = (info: InfoType):string=>
{
  return info.name + "__" + info.profession
}

// type InfoType={
//   name:string;
//   profession : string
// }



