export default function roleIdToRole(roleId:number){
    if(roleId === 1){
        return "Manager"
    }else if(roleId === 2){
        return "Leader"
    }else if(roleId === 3){
        return "Member"
    }else{
        return ""
    }
}
