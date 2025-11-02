export class ValidationPatternConstant {
    public static readonly namePattern: string = '[a-zA-Z0-9 _\\.\\-\\(\\)]*';
    public static readonly mobilePattern: string = '^[6-9]{1}[0-9]{9}$';
    public static readonly pincodePattern: string = '^[1-9][0-9]{5}$';
    public static readonly amountPattern: string = '^([0-9]{1, 3}(\, [0-9]{3})*|([0-9]+))(\.[0-9]{1,2})?$';
    public static readonly ifscCodePattern:string = '^[A-Z]{4}0[A-Z0-9]{6}$';
    public static readonly bankAccountNumberPattern:string = '^[0-9]{8,25}$';
    public static readonly numberPattern:string = '[ 0-9]*';
    public static readonly stringPattern:string = '[ a-zA-Z0-9]*';
    public static readonly mobileOTPPattern: string = '^[0-9]{6}$';
    public static readonly alphabetsPattern: string = '^[a-zA-Z ]+$';
    public static readonly emailAddressPattern: string = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
}
