export class ApiEndPointConstant {
//Attendance API URLs
public readonly attendanceGetList: string = 'Attendance/GetList';
public readonly attendanceGetById: string = 'Attendance/GetById';
public readonly attendanceUpdate: string = 'Attendance/Update';
public readonly attendanceDelete: string = 'Attendance/Delete';
public readonly attendanceProcess: string = 'Attendance/AttendanceProcess';
public readonly getAttendanceByEmployeeId: string = 'Attendance/GetCheckInByEmployeeId';
public readonly attendanceApprove: string = 'Attendance/AttendanceApprove';

//Category API URLs
public readonly categoryGetList: string = 'Category/GetList';
public readonly categoryGetById: string = 'Category/GetById';
public readonly categoryCreate: string = 'Category/Create';
public readonly categoryUpdate: string = 'Category/Update';
public readonly categoryDelete: string = 'Category/Delete';

//Center API URLs
public readonly centerGetList: string = 'Center/GetList';
public readonly centerGetById: string = 'Center/GetById';
public readonly centerGetCenterWorkingHour: string = 'Center/GetCenterWorkingHour';
public readonly centerCreate: string = 'Center/Create';
public readonly centerUpdate: string = 'Center/Update';
public readonly centerDelete: string = 'Center/Delete';

//Common API URLs
public readonly commonGetMenuSubMenuList: string = 'Common/GetMenuSubMenuList';
public readonly commonValidateField: string = 'Common/ValidateField';
public readonly commonValidateTime: string = 'Common/ValidateTime';
public readonly commonGetCompanyTypeList: string = 'Common/GetCompanyTypeList';
public readonly commonGetCountryList: string = 'Common/GetCountryList';
public readonly commonGetOrgnasiationTypeList: string = 'Common/GetOrgnasiationTypeList';
public readonly commonGetCategoryTypeList: string = 'Common/GetCategoryTypeList';
public readonly commonGetCultureList: string = 'Common/GetCultureList';
public readonly commonGetDocumentTypeList: string = 'Common/GetDocumentTypeList';
public readonly commonGetServiceConfigurationList: string = 'Common/GetServiceConfigurationList';
public readonly commonGetOverTimeTypeList: string = 'Common/GetOverTimeTypeList';
public readonly commonGetLanguageList: string = 'Common/GetLanguageList';
public readonly commonGetCurrencyList: string = 'Common/GetCurrencyList';
public readonly commonGetGenderList: string = 'Common/GetGenderList';
public readonly commonGetTaxTypeList: string = 'Common/GetTaxTypeList';
public readonly commonGetTimeZoneList: string = 'Common/GetTimeZoneList';
public readonly commonGetWorkingHourTypeList: string = 'Common/GetWorkingHourTypeList';
public readonly commonGetTargetTypeList: string = 'Common/GetTargetTypeList';
public readonly commonGetApplyOnList: string = 'Common/GetApplyOnList';
public readonly commonGetCalculationMethodList: string = 'Common/GetCalculationMethodList';
public readonly commonGetHolidayTypeList: string = 'Common/GetHolidayTypeList';
public readonly commonGetLeaveTypeList: string = 'Common/GetLeaveTypeList';
public readonly commonGetCenterList: string = 'Common/GetCenterList';
public readonly commonGetYearList: string = 'Common/GetYearList';
public readonly commonGetStateByZoneList: string = 'Common/GetStateByZoneList';
public readonly commonGetCategoryList: string = 'Common/GetCategoryList';
public readonly commonGetSubCategoryByCategoryList: string = 'Common/GetSubCategoryByCategoryList';
public readonly commonGetZoneList: string = 'Common/GetZoneList';
public readonly commonGetZoneCenterList: string = 'Common/GetZoneCenterList';
public readonly commonGetCompanyList: string = 'Common/GetCompanyList';
public readonly commonGetOrganizationList: string = 'Common/GetOrganizationList';
public readonly commonGetDesignationList: string = 'Common/GetDesignationList';
public readonly commonGetRoleList: string = 'Common/GetRoleList';
public readonly commonGetUserRightList: string = 'Common/GetUserRightList';
public readonly commonGetCommisionTypeList: string = 'Common/GetCommisionTypeList';
public readonly commonGetProductList: string = 'Common/GetProductList';
public readonly commonGetServiceList: string = 'Common/GetServiceList';
public readonly commonGetTaxGroupNameList: string = 'Common/GetTaxGroupNameList';
public readonly commonGetTrainingTypeList: string = 'Common/GetTrainingTypeList';
public readonly commonGetSchedulePreserveForList: string = 'Common/GetSchedulePreserveForList';
public readonly commonGetTrainingList: string = 'Common/GetTrainingList';
public readonly commonGetDepartmentList: string = 'Common/GetDepartmentList';
public readonly commonGetScheduleStatusList: string = 'Common/GetScheduleStatusList';
public readonly commonGetZoneWiseCenterList: string = 'Common/GetZoneWiseCenterList';
public readonly commonGetProductConfigurationTypeList: string = 'Common/GetProductConfigurationTypeList';
public readonly commonGetUnitTypeList: string = 'Common/GetUnitTypeList';
public readonly commonGetCustomParameterTypeList: string = 'Common/GetCustomParameterTypeList';
public readonly commonGetPackageCategoryTypeList: string = 'Common/GetPackageCategoryTypeList';
public readonly commonGetPackageTypeList: string = 'Common/GetPackageTypeList';
public readonly commonGetPackagePriceTypeList: string = 'Common/GetPackagePriceTypeList';
public readonly commonGetBusinessUnitTypeList: string = 'Common/GetBusinessUnitTypeList';
public readonly commonGetGracePeriodTypeList: string = 'Common/GetGracePeriodTypeList';
public readonly commonGetRedemptionTypeList: string = 'Common/GetRedemptionTypeList';
public readonly commonGetServiceCategoryTypeList: string = 'Common/GetServiceCategoryTypeList';
public readonly commonGetMembershipTypeList: string = 'Common/GetMembershipTypeList';
public readonly commonGetExpiryPeriodTypeList: string = 'Common/GetExpiryPeriodTypeList';
public readonly commonGetMembershipCategoryTypeList: string = 'Common/GetMembershipCategoryTypeList';
public readonly commonGetMembershipRenewalTypeList: string = 'Common/GetMembershipRenewalTypeList';
public readonly commonGetApplicabilityTypeList: string = 'Common/GetApplicabilityTypeList';
public readonly commonGetDiscountForTypeList: string = 'Common/GetDiscountForTypeList';
public readonly commonGetDiscountTypeList: string = 'Common/GetDiscountTypeList';
public readonly commonGetGiftCardExpiryTypeList: string = 'Common/GetGiftCardExpiryTypeList';
public readonly commonGetGiftCardRuleTypeList: string = 'Common/GetGiftCardRuleTypeList';
public readonly commonGetGiftCardPriceTypeList: string = 'Common/GetGiftCardPriceTypeList';
public readonly commonGetGiftCardValueTypeList: string = 'Common/GetGiftCardValueTypeList';
public readonly commonGetGiftCardOccasionList: string = 'Common/GetGiftCardOccasionList';
public readonly commonGetDiscountServiceTypeList: string = 'Common/GetDiscountServiceTypeList';
public readonly commonGetDiscountProductTypeList: string = 'Common/GetDiscountProductTypeList';
public readonly commonGetDiscountMembershipTypeList: string = 'Common/GetDiscountMembershipTypeList';
public readonly commonGetDiscountPackageTypeList: string = 'Common/GetDiscountPackageTypeList';
public readonly commonGetDiscountConditionTypeList: string = 'Common/GetDiscountConditionTypeList';
public readonly commonGetDiscountDiscountTypeList: string = 'Common/GetDiscountDiscountTypeList';
public readonly commonGetPromotionCommissionTypeList: string = 'Common/GetPromotionCommissionTypeList';
public readonly commonGetPromotionBusinessUnitList: string = 'Common/GetPromotionBusinessUnitList';
public readonly commonGetDisplayTimeUnitList: string = 'Common/GetDisplayTimeUnitList';
public readonly commonGetRebookedServiceList: string = 'Common/GetRebookedServiceList';
public readonly commonGetStartTypeList: string = 'Common/GetStartTypeList';
public readonly commonGetVendorList: string = 'Common/GetVendorList';
public readonly commonGetAllCenterList: string = 'Common/GetAllCenterList';
public readonly commonGetPointEarnedList: string = 'Common/GetPointEarnedList';
public readonly commonGetMembershipList: string = 'Common/GetMembershipList';
public readonly commonGetPackageList: string = 'Common/GetPackageList';
public readonly commonGetUploadPath: string = 'Common/GetUploadPath';
public readonly commonUploadFiles: string = 'Common/UploadFiles';
public readonly commonUploadFile: string = 'Common/UploadFile';
public readonly commonUploadLogo: string = 'Common/UploadLogo';
public readonly commonDeleteFile: string = 'Common/DeleteFile';
public readonly commonGetInvoiceTypeList: string = 'Common/GetInvoiceTypeList';
public readonly commonGetAppointmentTypeList: string = 'Common/GetAppointmentTypeList';
public readonly commonGetAppointmentRequestTypeList: string = 'Common/GetAppointmentRequestTypeList';
public readonly commonGetEmployeeList: string = 'Common/GetEmployeeList';
public readonly commonGetEmployeeListByAppointmentDate: string = 'Common/GetEmployeeWithTimeList?AppointmentDate=:appointmentDate&RequestTypeId=:requestTypeId';
public readonly commonGetRoomList: string = 'Common/GetRoomList';
public readonly commonGetAppointmentBlockTimeList: string = 'Common/GetAppointmentBlockTimeList';
public readonly commonGetRepeatTypeList: string = 'Common/GetRepeatTypeList';
public readonly commonGetIssuePriorityList: string = 'Common/GetIssuePriorityList';
public readonly commonGetIssueSourceList: string = 'Common/GetIssueSourceList';
public readonly commonGetIssueDateTypeList: string = 'Common/GetIssueDateTypeList';
public readonly commonGetAllEmployeeList: string = 'Common/GetAllEmployeeList';
public readonly commonGetStockTypeList: string = 'Common/GetStockTypeList';
public readonly commonGetOrderStatusList: string = 'Common/GetOrderStatusList';
public readonly commonGetVendorPartNumberList: string = 'Common/GetVendorPartNumberList';
public readonly commonGetPurchaseRequestList: string = 'Common/GetPurchaseRequestList';
public readonly commonGetPurchaseOrderListByVendorId: string = 'Common/GetPurchaseOrderListByVendorId';
public readonly commonGetPurchaseOrderListForInvoiceByVendorId: string = 'Common/GetPurchaseOrderListForInvoiceByVendorId';
public readonly commonGetStockAdjustmentReasonList: string = 'Common/GetStockAdjustmentReasonList';
public readonly commonGetDiscountList: string = 'Common/GetDiscountList';
public readonly commonGetLoyaltyPointList: string = 'Common/GetLoyaltyPointList';
public readonly commonGetExpenseTypeList: string = 'Common/GetExpenseTypeList';
public readonly commonGetExpenseCategoryList: string = 'Common/GetExpenseCategoryList';
public readonly commonGetAppointmentFolloupSearchStatusList: string = 'Common/GetAppointmentFolloupSearchStatusList';
public readonly commonGetAppointmentFolloupStatusList: string = 'Common/GetAppointmentFolloupStatusList';
public readonly commonGetGRNChallanList: string = 'Common/GetGRNChallanList';
public readonly commonGetAppointmentLineDeleteReasonList: string = 'Common/GetAppointmentLineDeleteReasonList';
public readonly commonGetCenterServiceList: string = 'Common/GetCenterServiceList';
public readonly commonGetCenterPackageList: string = 'Common/GetCenterPackageList';
public readonly commonGetCenterProductList: string = 'Common/GetCenterProductList';
public readonly commonGetCenterMembershipList: string = 'Common/GetCenterMembershipList';
public readonly commonGetUserPackageList: string = 'Common/GetUserPackageList';
public readonly commonGetTaxCalculationByValue: string = 'Common/GetTaxCalculationByValue';
public readonly commonIsArtistAvailable: string = 'Common/ValidateTime';
public readonly commonGetUserDiscountList: string = 'Common/GetUserDiscountList';
public readonly commonGetAppointmentProductList: string = 'Common/GetAppointmentProductList';
public readonly commonGetCustomerNote: string = 'Common/GetCustomerNote';
public readonly commonUpdateSetting: string = 'Common/UpdateSetting';
public readonly commonGetSetting: string = 'Common/GetSetting';
public readonly commonGetCenterDashboard: string = 'Common/GetCenterDashboard';
public readonly commonGetOrganisationDashboard: string = 'Common/GetOrganisationDashboard';
public readonly commonGetLanguageForMultiLangList: string = 'Common/GetLanguageForMultiLangList';
public readonly commonGetTrxnNameByLang: string = 'Common/GetTrxnNameByLang';
public readonly commonUpdateTrxnName: string = 'Common/UpdateTrxnName';

//Company API URLs
public readonly companyGetList: string = 'Company/GetList';
public readonly companyGetById: string = 'Company/GetById';
public readonly companyGetCompanyTaxGroup: string = 'Company/GetCompanyTaxGroup';
public readonly companyCreate: string = 'Company/Create';
public readonly companyUpdate: string = 'Company/Update';
public readonly companyDelete: string = 'Company/Delete';

//Department API URLs
public readonly departmentGetList: string = 'Department/GetList';
public readonly departmentGetById: string = 'Department/GetById';
public readonly departmentCreate: string = 'Department/Create';
public readonly departmentUpdate: string = 'Department/Update';
public readonly departmentDelete: string = 'Department/Delete';

//Designation API URLs
public readonly designationGetList: string = 'Designation/GetList';
public readonly designationGetById: string = 'Designation/GetById';
public readonly designationCreate: string = 'Designation/Create';
public readonly designationUpdate: string = 'Designation/Update';
public readonly designationDelete: string = 'Designation/Delete';

//Discount API URLs
public readonly discountGetList: string = 'Discount/GetList';
public readonly discountCreate: string = 'Discount/Create';
public readonly discountGetById: string = 'Discount/GetById';
public readonly discountUpdate: string = 'Discount/Update';
public readonly discountDelete: string = 'Discount/Delete';
public readonly discountImportDiscountCode: string = 'Discount/ImportDiscountCode';
public readonly discountGetCenterList: string = 'Discount/GetDiscountCenter';

//Employee API URLs
public readonly employeeGetList: string = 'Employee/GetList';
public readonly employeeCreate: string = 'Employee/Create';
public readonly employeeResendLink: string = 'Employee/ResendLink';
public readonly employeeGetRegistration: string = 'Employee/GetRegistration';
public readonly employeeUpdateRegistration: string = 'Employee/UpdateRegistration';
public readonly employeeSubmitResignation: string = 'Employee/EmployeeResignation';
public readonly employeeResignationGetById: string = 'Employee/GetEmployeeResignation';
public readonly employeeGetById: string = 'Employee/GetById';
public readonly employeeUpdate: string = 'Employee/Update';
public readonly employeeDelete: string = 'Employee/Delete';
public readonly employeeGetDeputationList: string = 'Employee/GetDeputationList';
public readonly employeeCreateDeputation: string = 'Employee/CreateDeputation';
public readonly employeeDeleteDeputation: string = 'Employee/DeleteDeputation';
public readonly employeeEmployeeCheckIn: string = 'Employee/EmployeeCheckIn';
public readonly employeeUpdateStatus: string = 'Employee/UpdateEmployeeStatus';

//GiftCard API URLs
public readonly giftCardGetList: string = 'GiftCard/GetList';
public readonly giftCardGetById: string = 'GiftCard/GetById';
public readonly giftCardCreate: string = 'GiftCard/Create';
public readonly giftCardUpdate: string = 'GiftCard/Update';
public readonly giftCardDelete: string = 'GiftCard/Delete';

//Holiday API URLs
public readonly holidayGetList: string = 'Holiday/GetList';
public readonly holidayGetById: string = 'Holiday/GetById';
public readonly holidayCreate: string = 'Holiday/Create';
public readonly holidayUpdate: string = 'Holiday/Update';
public readonly holidayDelete: string = 'Holiday/Delete';
public readonly holidayGetHolidayCenter: string = 'Holiday/GetHolidayCenter';

//Leave API URLs
public readonly leaveGetList: string = 'Leave/GetList';
public readonly leaveGetById: string = 'Leave/GetById';
public readonly leaveCreate: string = 'Leave/Create';
public readonly leaveUpdate: string = 'Leave/Update';
public readonly leaveDelete: string = 'Leave/Delete';
public readonly leaveGetApprovalList: string = 'Leave/GetApprovalList';
public readonly leaveGetApprovalById: string = 'Leave/GetApprovalById';
public readonly leaveUpdateApproval: string = 'Leave/UpdateApproval';

//Login API URLs
public readonly login: string = 'Login';
public readonly loginRefreshToken: string = 'Login/RefreshToken';
public readonly loginForgotPassword: string = 'Login/ForgotPassword';
public readonly loginForgotPasswordTokenValidation: string = 'Login/ForgotPasswordTokenValidation';
public readonly loginResetPassword: string = 'Login/ResetPassword';
public readonly loginChangePassword: string = 'Login/ChangePassword';
public readonly loginGetUserProfile: string = 'Login/GetUserProfile';
public readonly loginUpateUserProfile: string = 'Login/UpateUserProfile';
public readonly loginLogout: string = 'Login/Logout';

//LoyaltyPoint API URLs
public readonly loyaltyPointGetList: string = 'LoyaltyPoint/GetList';
public readonly loyaltyPointGetProduct: string = 'LoyaltyPoint/GetProduct';
public readonly loyaltyPointGetService: string = 'LoyaltyPoint/GetService';
public readonly loyaltyPointGetCenter: string = 'LoyaltyPoint/GetCenter';
public readonly loyaltyPointGetById: string = 'LoyaltyPoint/GetById';
public readonly loyaltyPointCreate: string = 'LoyaltyPoint/Create';
public readonly loyaltyPointUpdate: string = 'LoyaltyPoint/Update';
public readonly loyaltyPointDelete: string = 'LoyaltyPoint/Delete';
public readonly loyaltyPointUpdateSetting: string = 'LoyaltyPoint/UpdateSetting';
public readonly loyaltyPointGetSetting: string = 'LoyaltyPoint/GetSetting';

//Membership API URLs
public readonly membershipGetList: string = 'Membership/GetList';
public readonly membershipCreate: string = 'Membership/Create';
public readonly membershipGetServiceDiscountMapList: string = 'Membership/GetServiceDiscountMapList';
public readonly membershipGetById: string = 'Membership/GetById';
public readonly membershipUpdate: string = 'Membership/Update';
public readonly membershipDelete: string = 'Membership/Delete';
public readonly membershipGetPriceById: string = 'Membership/GetPriceById';

//Organisation API URLs
public readonly organisationGetList: string = 'Organisation/GetList';
public readonly organisationGetById: string = 'Organisation/GetById';
public readonly organisationCreate: string = 'Organisation/Create';
public readonly organisationUpdate: string = 'Organisation/Update';
public readonly organisationDelete: string = 'Organisation/Delete';

//Package API URLs
public readonly packageGetList: string = 'Package/GetList';
public readonly packageCreate: string = 'Package/Create';
public readonly packageGetById: string = 'Package/GetById';
public readonly packageUpdate: string = 'Package/Update';
public readonly packageDelete: string = 'Package/Delete';
public readonly packageGetPriceById: string = 'Package/GetPriceById';
public readonly GetCustomerPackageById: string = 'Package/GetCustomerPackageById';

//Product API URLs
public readonly productGetList: string = 'Product/GetList';
public readonly productCreate: string = 'Product/Create';
public readonly productGetById: string = 'Product/GetById';
public readonly productUpdate: string = 'Product/Update';
public readonly productDelete: string = 'Product/Delete';
public readonly productGetPriceById: string = 'Product/GetPriceById';

//Promotion API URLs
public readonly promotionGetList: string = 'Promotion/GetList';
public readonly promotionGetById: string = 'Promotion/GetById';
public readonly promotionCreate: string = 'Promotion/Create';
public readonly promotionUpdate: string = 'Promotion/Update';
public readonly promotionDelete: string = 'Promotion/Delete';

//Role API URLs
public readonly roleGetList: string = 'Role/GetList';
public readonly roleGetById: string = 'Role/GetById';
public readonly roleCreate: string = 'Role/Create';
public readonly roleUpdate: string = 'Role/Update';
public readonly roleDelete: string = 'Role/Delete';
public readonly roleGetModuleRightsGroup: string = 'Role/GetModuleRightsGroup';

//Schedule API URLs
public readonly scheduleGetListByDate: string = 'Schedule/GetListByDate';
public readonly scheduleGetListByWeek: string = 'Schedule/GetListByWeek';
public readonly scheduleGetListByMonth: string = 'Schedule/GetListByMonth';
public readonly scheduleGetHolidayList: string = 'Schedule/GetHolidayList';
public readonly scheduleGetWeekList: string = 'Schedule/GetWeekList';
public readonly scheduleUpdateDaySchedule: string = 'Schedule/UpdateDaySchedule';
public readonly scheduleUpdateWeekSchedule: string = 'Schedule/UpdateWeekSchedule';
public readonly scheduleUpdateMonthSchedule: string = 'Schedule/UpdateMonthSchedule';
public readonly scheduleCopySchedule: string = 'Schedule/CopySchedule';

//Service API URLs
public readonly serviceGetList: string = 'Service/GetList';
public readonly serviceCreate: string = 'Service/Create';
public readonly serviceGetById: string = 'Service/GetById';
public readonly serviceUpdate: string = 'Service/Update';
public readonly serviceDelete: string = 'Service/Delete';
public readonly serviceGetPriceById: string = 'Service/GetPriceById';
public readonly getCategoryServiceList: string = 'Common/GetCategoryServiceList';

//State API URLs
public readonly stateGetList: string = 'State/GetList';
public readonly stateGetById: string = 'State/GetById';
public readonly stateCreate: string = 'State/Create';
public readonly stateUpdate: string = 'State/Update';
public readonly stateDelete: string = 'State/Delete';

//SubCategory API URLs
public readonly subCategoryGetList: string = 'SubCategory/GetList';
public readonly subCategoryGetById: string = 'SubCategory/GetById';
public readonly subCategoryCreate: string = 'SubCategory/Create';
public readonly subCategoryUpdate: string = 'SubCategory/Update';
public readonly subCategoryDelete: string = 'SubCategory/Delete';

//Target API URLs
public readonly targetGetList: string = 'Target/GetList';
public readonly targetGetById: string = 'Target/GetById';
public readonly targetGetCenterById: string = 'Target/GetCenterById';
public readonly targetGetEmployeeById: string = 'Target/GetEmployeeById';
public readonly targetCreate: string = 'Target/Create';
public readonly targetUpdate: string = 'Target/Update';
public readonly targetDelete: string = 'Target/Delete';

//TaxGroup API URLs
public readonly taxGroupGetList: string = 'TaxGroup/GetList';
public readonly taxGroupGetById: string = 'TaxGroup/GetById';
public readonly taxGroupCreate: string = 'TaxGroup/Create';
public readonly taxGroupUpdate: string = 'TaxGroup/Update';
public readonly taxGroupDelete: string = 'TaxGroup/Delete';

//Template API URLs
public readonly templateGetList: string = 'Template/GetList';
public readonly templateGetById: string = 'Template/GetById';
public readonly templateUpdate: string = 'Template/Update';
public readonly templateCreate: string = 'Template/Create';
public readonly templateDelete: string = 'Template/Delete';

// Notification Template API URLs
public readonly notificationTemplateGetList: string = 'Notification/GetList';
public readonly notificationTemplateGetById: string = 'Notification/GetById';
public readonly notificationTemplateUpdate: string = 'Notification/Update';
public readonly notificationTemplateCreate: string = 'Notification/Create';
public readonly notificationTemplateDelete: string = 'Notification/Delete';

//Training API URLs
public readonly trainingGetList: string = 'Training/GetList';
public readonly trainingCreate: string = 'Training/Create';
public readonly trainingGetById: string = 'Training/GetById';
public readonly trainingUpdate: string = 'Training/Update';
public readonly trainingDelete: string = 'Training/Delete';

//TrainingSchedule API URLs
public readonly trainingScheduleGetList: string = 'TrainingSchedule/GetList';
public readonly trainingScheduleCreate: string = 'TrainingSchedule/Create';
public readonly trainingScheduleGetById: string = 'TrainingSchedule/GetById';
public readonly trainingScheduleUpdate: string = 'TrainingSchedule/Update';
public readonly trainingScheduleDelete: string = 'TrainingSchedule/Delete';

//User API URLs
public readonly userGetList: string = 'User/GetList';
public readonly userGetById: string = 'User/GetById';
public readonly userCreate: string = 'User/Create';
public readonly userUpdate: string = 'User/Update';

//Vendor API URLs
public readonly vendorGetList: string = 'Vendor/GetList';
public readonly vendorCreate: string = 'Vendor/Create';
public readonly vendorGetById: string = 'Vendor/GetById';
public readonly vendorUpdate: string = 'Vendor/Update';
public readonly vendorDelete: string = 'Vendor/Delete';

//Vendor Invoice API URLs
public readonly vendorInvoiceGetList: string = 'VendorInvoice/GetList';
public readonly vendorInvoiceCreate: string = 'VendorInvoice/Create';
public readonly vendorInvoiceGetById: string = 'VendorInvoice/GetById';
public readonly vendorInvoiceUpdate: string = 'VendorInvoice/Update';
public readonly vendorInvoiceDelete: string = 'VendorInvoice/Delete';

//Zone API URLs
public readonly zoneGetList: string = 'Zone/GetList';
public readonly zoneGetById: string = 'Zone/GetById';
public readonly zoneCreate: string = 'Zone/Create';
public readonly zoneUpdate: string = 'Zone/Update';
public readonly zoneDelete: string = 'Zone/Delete';

//Customer API URLs
public readonly customerGetList: string = 'Customer/GetList';
public readonly customerGetListByEmailOrMobileNo: string = 'Customer/GetListByEmailOrMobileNo';
public readonly customerGetById: string = 'Customer/GetById';
public readonly customerCreate: string = 'Customer/Create';
public readonly customerUpdate: string = 'Customer/Update';
public readonly customerDelete: string = 'Customer/Delete';
public readonly customerSendResetPasswordLink: string = 'Customer/SendResetPasswordLink';
public readonly customerSearch: string = 'Customer/GetCustomerSearch';
public readonly mergeCustomer: string = 'Customer/MergeCustomer';
public readonly customerAppointmentList: string = 'Customer/GetCustomerAppointmentList';
public readonly customerProductList: string = 'Customer/GetCustomerProductList';
public readonly customerIssueList: string = 'Customer/GetCustomerIssueList';
public readonly getCustomerAppointmentPaymentList: string = 'Customer/GetCustomerAppointmentPaymentList';
public readonly getCustomerGiftCardList: string = 'Customer/GetCustomerGiftCardList';
public readonly getCustomerMembershipList: string = 'Customer/GetCustomerMembershipList';
public readonly getCustomerPackageList: string = 'Customer/GetCustomerPackageList';
public readonly getCustomerOpenInvoiceList: string = 'Customer/GetCustomerOpenInvoiceList';
public readonly getCustomerLoyaltyPointList: string = 'Customer/GetCustomerLoyaltyPointList';

//Appointment API URLs
public readonly appointmentGetList: string = 'Appointment/GetList';
public readonly getAppoinmentFollowUpList: string = 'Appointment/GetAppointmentFollowupList';
public readonly getAppoinmentBlockListDetails: string = 'Appointment/GetBlockTimeById';
public readonly appointmentGetById: string = 'Appointment/GetById?id=:id';
public readonly appointmentPOSGetById: string = 'Appointment/GetPOSById?id=:id';
public readonly getInvoiceById: string = 'Appointment/GetInvoiceByID?id=:id';
public readonly appointmentCreate: string = 'Appointment/Create';
public readonly appointmentUpdate: string = 'Appointment/Update';
public readonly appointmentUpdatePOS: string = 'Appointment/UpdatePOS';
public readonly appointmentCreatePOS: string = 'Appointment/CreatePOS';
public readonly appointmentDelete: string = 'Appointment/Delete?id=:id&Organisationid=:Organisationid&Zoneid=:Zoneid&Centerid=:Centerid&Languageid=:Languageid';
public readonly appointmentCreateBlockTime: string = 'Appointment/CreateBlockTime';
public readonly appointmentGetAppointentPackageServiceById: string = 'Appointment/GetAppointentPackageServiceById?id=:id';
public readonly appointmentGetAppointmentCenterTime: string = 'Appointment/GetAppointmentCenterTime?AppointmentDate=:AppointmentDate&Centerid=:Centerid';
public readonly appointmentUpdateBlockTime: string = 'Appointment/UpdateBlockTime';
public readonly appointmentCreateNote: string = 'Appointment/CreateNote';
public readonly appointmentGetNoteList: string = 'Appointment/GetNoteList';
public readonly appointmentCancel: string = 'Appointment/Cancel';
public readonly appointmentEventDelete: string = 'Appointment/DeleteService';
public readonly getAppointmentDeleteReasonList: string = 'Common/GetAppointmentDeleteReasonList';
public readonly appointmentUpdateRepeat: string = 'Appointment/UpdateRepeat';
public readonly appointmentCheckIn: string = 'Appointment/CheckIn';
public readonly appointmentUpdateReview: string = 'Appointment/UpdateReview';
public readonly appointmentGetReviewById: string = 'Appointment/GetReviewById';
public readonly appointmentServiceIssue: string = 'Appointment/GetAppointmentServiceIssue';
public readonly appointmentUpdateServiceIssue: string = 'Appointment/UpdateAppointmentServiceIssue';
public readonly appointmentGetServiceIssueList: string = 'Appointment/GetAppointmentServiceIssueList';
public readonly appointmentGetCanceltList: string = 'Appointment/GetCanceltList';
public readonly appointmentGetInvoiceList: string = 'Appointment/GetInvoiceList';
public readonly appointmentGetTodaysCollectionsList: string = 'Appointment/GetTodaysCollectionsList';
public readonly appointmentGetTodaysEmployeesTipList: string = 'Appointment/GetTodaysEmployeesTipList';
public readonly appointmentGetTodaysTransactionalList: string = 'Appointment/GetTodaysTransactionalDetailsList';
public readonly appointmentGetTodaysRegisterSummary: string = 'Appointment/GetTodaysRegisterSummary';
public readonly appointmentGetRegisterClosureDetails: string = 'Appointment/GetRegisterClosureDetails';
public readonly appointmentUpdateRegisterClosureDetails: string = 'Appointment/UpdateRegisterClosureDetails';
public readonly appointmentEditInvoice: string = 'Appointment/EditInvoice';
public readonly appointmentReopenAppointment: string = 'Appointment/ReopenAppointment';
public readonly getAppointmentServiceIssuePrint: string = 'Appointment/GetAppointmentServiceIssuePrint';
public readonly appointmentDeleteBlockTime: string = 'Appointment/DeleteBlockTime';
public readonly appointmentSendPaymentOtp: string = 'Appointment/SendPaymentOtp';
public readonly appointmentVerifyPaymentOtp: string = 'Appointment/VerifyPaymentOtp';
public readonly getAppointmentGiftCardDetailsById: string = 'Appointment/GetGiftCard';
public readonly getAppointmentServiceById: string = 'Appointment/GetAppointmentServiceById';
public readonly updateAppointmentServicebyId: string = 'Appointment/UpdateAppointmentServicebyId';
public readonly appointmentGetCustomerGiftCards: string = 'Appointment/GetCustomerGiftCards';
public readonly appointmentSendAppointmentServiceEmail: string = 'Appointment/SendAppointmentServiceEmail';
public readonly appointmentSetAppointmentServiceCallStatus: string = 'Appointment/SetAppointmentServiceCallStatus';


// Purchase Management
public readonly getPurchaseManagementList: string = 'PurchaseOrder/GetList';
public readonly getPurchaseOrderDetails: string = 'PurchaseOrder/GetById';
public readonly savePurchaseOrder: string = 'PurchaseOrder/Create';
public readonly updatePurchaseOrder: string = 'PurchaseOrder/Update';
public readonly deletePurchaseOrder: string = 'PurchaseOrder/Delete';
public readonly getGetPOItemTax: string = 'PurchaseOrder/GetPOItemTax';
public readonly getPurchaseItemByPurchaseRequestId: string = 'PurchaseOrder/GetPurchaseItemByPurchaseRequestId';

// Purchase Request Management
public readonly getPurchaseRequestManagementList: string = 'PurchaseRequest/GetList';
public readonly getPurchaseRequestOrderDetails: string = 'PurchaseRequest/GetById';
public readonly savePurchaseRequestOrder: string = 'PurchaseRequest/Create';
public readonly updatePurchaseRequestOrder: string = 'PurchaseRequest/Update';
public readonly deletePurchaseRequestOrder: string = 'PurchaseRequest/Delete';
public readonly getReconciliationList: string = 'PurchaseRequest/GetReconciliationList';
public readonly updateReconciliationList: string = 'PurchaseRequest/UpdateReconciliationList';
public readonly getPurchaseRequestDeliveryListById: string = 'PurchaseRequest/GetDeliveryListById';

// Stock Management
public readonly getStockManagementList: string = 'Stock/GetList';
public readonly getStockDetailsById: string = 'Stock/GetById';
public readonly getStockHistoryById: string = 'Stock/GetHistoryById';
public readonly getStockAdjustmentList: string = 'Stock/GetAdjustmentList';
public readonly createStockAdjustment: string = 'Stock/CreateAdjustment';
public readonly updateStockAdjustment: string = 'Stock/UpdateAdjustment';
public readonly deleteStockAdjustment: string = 'Stock/DeleteStockAdjustment';
public readonly getStockAdjustmentById: string = 'Stock/GetAdjustmentById';
public readonly getStockQuantity: string = 'Stock/GetStockQuantity';

// GRN
public readonly getGRNList: string = 'GRN/GetList';
public readonly getGRNDetailById: string = 'GRN/GetById';
public readonly getGRNItemByPurchaseOrderId: string = 'GRN/GetGRNItemByPurchaseOrderId';
public readonly createGRN: string = 'GRN/Create';
public readonly updateGRN: string = 'GRN/Update';
public readonly deleteGRN: string = 'GRN/Delete';

// Expense Management
public readonly expenseGetList: string = 'Expense/GetList';
public readonly expenseGetById: string = 'Expense/GetById';
public readonly expenseCreate: string = 'Expense/Create';
public readonly expenseUpdate: string = 'Expense/Update';
public readonly expenseDelete: string = 'Expense/Delete';
public readonly expenseGetPaymentById: string = 'Expense/GetPaymentById';
public readonly expenseUpdatePayment: string = 'Expense/UpdatePayment';

// Stock Requisition
public readonly stockRequisitionGetList: string = 'StockRequisition/GetList';
public readonly stockRequisitionGetById: string = 'StockRequisition/GetById';
public readonly stockRequisitionCreate: string = 'StockRequisition/Create';
public readonly stockRequisitionUpdate: string = 'StockRequisition/Update';
public readonly stockRequisitionDelete: string = 'StockRequisition/Delete';
public readonly stockRequisitionGetIssueNoteById: string = 'StockRequisition/GetIssueNoteById';
public readonly stockRequisitionUpdateIssueNote: string = 'StockRequisition/UpdateIssueNote';


// Block Out Type
public readonly blockOutTypeGetList: string = 'BlockOutType/GetList';
public readonly blockOutTypeGetById: string = 'BlockOutType/GetById';
public readonly blockOutTypeCreate: string = 'BlockOutType/Create';
public readonly blockOutTypeUpdate: string = 'BlockOutType/Update';
public readonly blockOutTypeDelete: string = 'BlockOutType/Delete';

// Reports
public readonly getAttendanceReportList: string = 'Reports/GetAttendanceReportList';
public readonly getAppointmentReportList: string = 'Reports/GetAppointmentReportList';
public readonly getSalesAccuralReportList: string = 'Reports/GetSalesAccuralReportList';
public readonly getRegisterClosureReportList: string = 'Reports/GetRegisterClosureReportList';


};
