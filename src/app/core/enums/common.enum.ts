export enum Rights {
  organizationView = 1,
  organizationAddEdit = 2,
  organizationDelete = 3,
  companyView = 4,
  companyAddEdit = 5,
  companyDelete = 6,
  zoneView = 7,
  zoneAddEdit = 8,
  zoneDelete = 9,
  centerView = 10,
  centerAddEdit = 11,
  centerDelete = 12,
  targetView = 13,
  targetAddEdit = 14,
  targetDelete = 15,
  stateView = 16,
  stateAddEdit = 17,
  stateDelete = 18,
  taxGroupView = 19,
  taxGroupAddEdit = 20,
  taxGroupDelete = 21,
  categoryView = 22,
  categoryAddEdit = 23,
  categoryDelete = 24,
  subCategoryView = 25,
  subCategoryAddEdit = 26,
  subCategoryDelete = 27,
  serviceView = 28,
  serviceAddEdit = 29,
  serviceDelete = 30,
  productView = 31,
  productAddEdit = 32,
  productDelete = 33,
  packejView = 34,
  packejAddEdit = 35,
  packejDelete = 36,
  holidayView = 37,
  holidayAddEdit = 38,
  holidayDelete = 39,
  designationView = 40,
  designationAddEdit = 41,
  designationDelete = 42,
  departmentView = 43,
  departmentAddEdit = 44,
  departmentDelete = 45,
  employeeView = 46,
  employeeAddEdit = 47,
  employeeDelete = 48,
  leaveView = 49,
  leaveAddEdit = 50,
  leaveDelete = 51,
  leaveApproval = 52,
  scheduleView = 53,
  scheduleAddEdit = 54,
  scheduleDelete = 55,
  attendanceView = 56,
  attendanceAddEdit = 57,
  attendanceDelete = 58,
  trainingView = 59,
  trainingAddEdit = 60,
  trainingDelete = 61,
  scheduleTrainingView = 62,
  scheduleTrainingAddEdit = 63,
  scheduleTrainingDelete = 64,
  commissionView = 65,
  commissionAddEdit = 66,
  commissionDelete = 67,
  userManagementView = 68,
  userManagementAddEdit = 69,
  userManagementDelete = 70,
  roleManagementView = 71,
  roleManagementAddEdit = 72,
  roleManagementDelete = 73,

  purchaseRequestManagementView = 110,
  purchaseRequestManagementAddEdit = 112,
  purchaseRequestManagementDelete = 113,

  purchaseManagementView = 113,
  purchaseManagementAddEdit = 114,
  purchaseManagementDelete = 115,

  appointmentManagementView = 102,
  appointmentManagementAddEdit = 103,
  appointmentManagementDelete = 104,

  appointmentManagementPosView = 122,

  vendorManagementView = 77,
  vendorManagementAddEdit = 78,
  vendorManagementDelete = 79,

  memberShipManagementView = 83,
  memberShipManagementAddEdit = 84,
  memberShipManagementDelete = 85,

  giftCardManagementView = 90,
  giftCardManagementAddEdit = 91,
  giftCardManagementDelete = 92,

  promotionCodeManagementView = 96,
  promotionCodeManagementAddEdit = 97,
  promotionCodeManagementDelete = 98,

  loyaltyPointManagementView = 99,
  loyaltyPointManagementAddEdit = 100,
  loyaltyPointManagementDelete = 101,

  customerManagementView = 105,
  customerManagementAddEdit = 106,
  customerManagementDelete = 107,

  leaveApprovalView = 86,
  templateManagementView = 87,
  templateManagementAddEdit = 88,
  templateManagementDelete = 89,

  discountManagementView = 93,
  discountManagementAddEdit = 94,
  discountManagementDelete = 95,

  stockManagementView = 116,
  stockManagementAddEdit = 117,
  stockManagementDelete = 118,

  stockAdjustmentView = 123,
  stockAdjustmentAddEdit = 124,
  stockAdjustmentDelete = 125,

  grnManagementView = 127,
  grnManagementAddEdit = 128,
  grnManagementDelete = 129,

  vendorInvoiceManagementView = 132,
  vendorInvoiceManagementAddEdit = 133,
  vendorInvoiceManagementDelete = 134,

  expenseManagementView = 135,
  expenseManagementAddEdit = 136,
  expenseManagementDelete = 137,
  expenseManagementApprove = 138,

  requisitionManagementView = 140,
  requisitionManagementAddEdit = 141,
  requisitionManagementDelete = 142,
  requisitionManagementApprove = 143,

  launchPOSAddSalesPriceField = 179,
  editAppointmentInvoice = 182,

  //Reports Module
  customerFeedbackReportView = 184,
  customerRetentionReportView = 185,
  employeePerformanceReportView = 186,
  discountRedemptionReportView = 187,
  deletedAppointmentsReportView = 188,
  employeeSalesReportView = 189,
  employeeTipsReportView = 190,
  collectionsReportView = 191,
  modifiedAppointmentsReportView = 192,

  //Appointment Register Closure
  appointmentRegisterClosureView = 183,


}

export enum parameterType {
  text = 1,
  radio = 2,
  checkbox = 3,
  datePicker = 4,
  dropdown = 5,
  timePicker = 6,
  email = 7,
  number = 8,
  textarea = 9,
}

export enum packageType {
  day = 1,
  series = 2,
  offer = 3,
  seriesTemplate = 4,
}

export enum packagePriceType {
  moreThanProductPrice = 1,
  lessThanProductPrice = 2,
}

export enum gracePreiodType {
  percentage = 1,
  days = 2,
}

export enum validityType {
  fixedExpiry = 1,
  defineExpiryDate = 2,
  neverExpires = 3,
}

export enum commissionType {
  flatAmount = 1,
  percentageOfRevenue = 2,
  definedInEmployeeOrJobProfile = 3,
}

export enum membershipType {
  recurring = 1,
  noneRecurring = 2,
}

export enum discountType {
  percentage = 1,
  flatAmount = 2,
}

export enum paymentFrequencyType {
  paymentFrequency = 1,
  paymentInstallments = 2,
}

export enum categoryType {
  other = 0,
  product = 1,
  service = 2,
  package = 3,
}

export enum invoiceTypeList {
  percentage = 1,
  specificValue = 2,
}

export enum discountTypeLevel {
  invoceLevel = 1,
  itemLevel = 2,
}

export enum voucherTypes {
  vouchersWithConsecutiveNumbers = 1,
  vouchersWithRandomNumbers = 2,
  importVoucherCodes = 3,
}

export enum discountExpiresType {
  in = 1,
  out = 2,
}
