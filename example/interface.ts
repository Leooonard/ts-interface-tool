// tslint:disable jsdoc-format

interface FlightXProductSetingV2RequestType {
    /**
    
    */
    SourceType: number | 0
    /**
    X产品配置请求Json串（国内服务端在航班详情接口下发，NoteList.NoteType=5的类型，主要内容包括航班信息（支持多段多程），服务端用这些参数查询SOA接口使用，服务端可以动态增加，对客户端是透明的）
  （国际802中是18=下发国际确认页服务调用的参数串（服务端拼接Json串，包括的内容是航程信息和舱位信息，主要用于查询国际接送机时使用，如果后期有其他X产品在确认页增加，需要的参数也可以拼接进来）（6.20））
    */
    XProductRequestString: string | null
    /**
    扩展信息
    */
    ExtendInfo: Array<FlightXProductConfirmPageExtendInformation> | null
    /**
    乘机人信息列表
    */
    PassengerList: Array<FlightConfirmPagePassengerInformation> | null
}
interface FlightXProductSetingV2ResponseType {
    /**
    结果状态
    */
    Result: number | 0
    /**
    描述
    */
    ResultMsg: string | null
    /**
    X产品配置项列表
    */
    FlightXProductSetingList: Array<FlightXProductConfirmPageItemInformation> | null
    /**
    X产品提示说明文案信息
    */
    NoteList: Array<FlightXProductConfirmPageNoteInformation> | null
    /**
    X 产品特权信息（同一个X产品多个特权和价格，客户端默认优先取最高优惠金额抵扣）
    */
    CouponInfo: Array<FlightXProductCouponInformation> | null
    /**
    X产品数据列表（6.18新版本数据结构）
    */
    PackageNewList: Array<FlightInlandPackageNewInformation> | null
    /**
    权益包列表
    */
    InterestPackageList: Array<FlightInterestPackageInformation> | null
    /**
    酒店信息
    */
    HotelInfoList: Array<FlightRecommendHotelInformation> | null
    /**
    酒店文案信息
    */
    HotelNoteInfoList: Array<FlightRecommendHotelNoteInformation> | null
    /**
    X产品展示排序列表
    */
    SortList: Array<FlightXPackageSortInformation> | null
    /**
    位操作
    */
    FlagMap: number | 0
}
interface FlightXPackageSortInformation {
    /**
    场景类型
    */
    SceneType: number | 0
    /**
    X产品排序顺序（用英文逗号分隔，通过XpackageTypeID来定义对应的X）（国际用车-998，国内用车-999，休息室-10，安检-9，接送机券-23）
    */
    Sort: string | null
}
interface FlightRecommendHotelNoteInformation {
    /**
    信息类型
    */
    HotelNoteType: number | 0
    /**
    信息内容
    */
    HotelContent: string | null
}
interface FlightRecommendHotelInformation {
    /**
    酒店ID
    */
    HotelID: number | 0
    /**
    酒店名称
    */
    Name: string | null
    /**
    酒店英文名称
    */
    EnName: string | null
    /**
    酒店图片地址
    */
    ImageUrl: string | null
    /**
    酒店地址
    */
    Address: string | null
    /**
    酒店英文地址
    */
    EnAddress: string | null
    /**
    酒店地标或商圈（例如：人民广场）
    */
    NearByPOIs: Array<FlightHotelNearInformation> | null
    /**
    酒店星级(支持半星)
    */
    StarLevel: number | 0
    /**
    评分（满分5分）
    */
    RemarkScore: number | 0
    /**
    评分人数
    */
    ScoreCount: number | 0
    /**
    酒店等级描述（如舒适/奢华）
    */
    HotelLevelRmk: string | null
    /**
    标签信息列表
    */
    HotelTagList: Array<FlightHotelTagItemInformation> | null
    /**
    房间信息
    */
    RoomInfoList: Array<FlightRecommendHotelRoomInformation> | null
    /**
    城市ID
    */
    CityID: number | 0
    /**
    城市名称
    */
    CityName: string | null
    /**
    996=酒店的类型（服务端自己定义的，例如服务端对接送机定义的是999）
    */
    XProductTypeID: number | 0
}
interface FlightRecommendHotelRoomInformation {
    /**
    房间图片地址
    */
    ImageURL: string | null
    /**
    房型信息列表
    */
    RoomMarkList: Array<FlightRecommendHotelRoomBasicInformation> | null
    /**
    房型设施列表
    */
    Facilities: Array<FlightHotelFacilitiesInformation> | null
    /**
    客户端传给酒店Bu的JSON参数串（前端和酒店BU前端约定好，可以在服务端这边拼接，比如切换房型时，给到的酒店的RoomID和机票这边定义的价格的列表，服务端这边取Xlist接口的Room列表的ID和售价）
    */
    RoomString: string | null
}
interface FlightHotelFacilitiesInformation {
    /**
    设施名称
    */
    CategoryName: string | null
    /**
    设施内容描述
    */
    Content: string | null
}
interface FlightRecommendHotelRoomBasicInformation {
    /**
    房间ID
    */
    RoomID: number | 0
    /**
    房间名称(例如：双床房)
    */
    Name: string | null
    /**
    入住日期（单程：入住时间为到达日期；离店时间为到达时间+X；X可配置，上线时配置为2（默认服务端下发，+X服务端配置对客户端透明）；往返程则是入住时间为去程到达日期；离店时间为返程起飞日期）
    */
    CheckInDate: Date | null
    /**
    最迟离店日期（客户端处理一下日期）
    */
    CheckOutDate: Date | null
    /**
    酒店房型的售价
    */
    Price: number | 0
    /**
    房间数（默认1）
    */
    RoomCount: number | 0
    /**
    早餐信息（例如：无早）
    */
    BreakfastMark: string | null
    /**
    服务端下发的参数串，需要客户端在创建订单时上传
    */
    HotelParamString: string | null
    /**
    酒店优惠额度
    */
    DiscountAmount: number | 0
    /**
    酒店原价
    */
    OriginalPrice: number | 0
    /**
    床信息列表
    */
    RoomBedInfo: Array<FlightHotelRoomBedInformation> | null
    /**
    房间面积
    */
    AcreageRange: string | null
    /**
    加床描述
    */
    AdditionBed: string | null
    /**
    网络宽带描述
    */
    SmokingRmk: string | null
    /**
    吸烟描述
    */
    LatestCancelTime: Date | null
    /**
    最晚取消时间
    */
    BroadNet: string | null
    /**
    房间特色标签列表
    */
    RoomTags: Array<FlightHotelRoomTagInformation> | null
}
interface FlightHotelRoomTagInformation {
    /**
    展示区域
    */
    AreaType: number | 0
    /**
    展示内容
    */
    TagContent: string | null
}
interface FlightHotelRoomBedInformation {
    /**
    床名称
    */
    BedName: string | null
    /**
    床数量
    */
    Number: number | 0
    /**
    床宽度
    */
    BedWidth: number | 0
}
interface FlightHotelTagItemInformation {
    /**
    标签区域类型（划分不同区域，目的区分不同区域的颜色样式等）
    */
    AreaType: number | 0
    /**
    区域内容（多个标签文案用|分割）
    */
    TagContent: string | null
}
interface FlightHotelNearInformation {
    /**
    地标名称
    */
    Name: string | null
    /**
    距离描述
    */
    Distance: string | null
}
interface FlightInterestPackageInformation {
    /**
    权益包基本信息
    */
    InterestBasicInfo: FlightInterestPackageBasicInformation | null
    /**
    Plus权益包涉及的X产品信息列表（服务端仅返回可享受会员价的X产品）
    */
    XPackageInterestsList: Array<FlightMemberInterestPackageInformation> | null
}
interface FlightMemberInterestPackageInformation {
    /**
    权益明细类型
    */
    InterestsType: number | 0
    /**
    权益包字符串（服务端拼接下发，包括InterestsPackageID，开发根据需要增加）
    */
    InterestString: string | null
    /**
    X产品信息列表
    */
    XPackageList: Array<FlightMemberInterestPackageDetailInformation> | null
    /**
    Plus会员信息列表（专享权益时才有下发，客户端通过该信息和乘机人进行比对，判断乘机人中是否有受益人，判断的规则是乘客姓名+证件类型+证件号，该规则产品再确认一下）
    */
    MemberInfos: Array<FlightMemberInterestInformation> | null
}
interface FlightMemberInterestInformation {
    /**
    姓名
    */
    Name: string | null
    /**
    证件列表
    */
    MemberIDCardInfoSaveList: Array<FlightMemberInterestIDCardInformation> | null
    /**
    会员手机号码
    */
    ContactPhone: string | null
    /**
    手机对应的国家编码
    */
    CountryCode: string | null
    /**
    标记位（位操作）
    */
    Flag: number | 0
}
interface FlightMemberInterestIDCardInformation {
    /**
    证件类型
    */
    IDCardType: number | 0
    /**
    证件号码
    */
    IDCardNo: string | null
}
interface FlightMemberInterestPackageDetailInformation {
    /**
    X产品类型（服务端定义给客户端的X产品，保持类型值的唯一）
  （这里包括中间页的X产品和填写页X产品，确认页X产品）
    */
    PackageType: number | 0
    /**
    X产品购买限制信息
    */
    PackagePlusPriceInfor: Array<FlightMemberInterestSaleInformation> | null
    /**
    X产品对应的会员权益剩余可享受的次数
    */
    RestCount: number | 0
    /**
    位操作
    */
    Flag: number | 0
    /**
    X产品对应的会员权益总可享受的次数
    */
    TotalCount: number | 0
    /**
    X产品对应的NoteList
    */
    PackageInterestNoteList: Array<FlightPackageInterestNoteInformation> | null
    /**
    旅行家涉及权益（X产品优惠）在价格明细中展示的名称
    */
    PackageDisplayName: string | null
}
interface FlightPackageInterestNoteInformation {
    /**
    类型
    */
    Type: number | 0
    /**
    内容
    */
    Content: string | null
}
interface FlightMemberInterestSaleInformation {
    /**
    行程编号
    */
    SegmentNo: number | 0
    /**
    X产品Code
    */
    PackageCode: string | null
    /**
    乘客类型
    */
    PassengerType: BasicPassengerType | null
    /**
    X产品售卖价格
    */
    SalePrice: number | 0
    /**
    X产品原始价
    */
    OriginalPrice: number | 0
    /**
    X产品Plus会员享受的价格（服务端下发）
    */
    InterestPlusPrice: number | 0
    /**
    X产品多价格数量（停车场按天等）
    */
    Quantity: number | 0
    /**
    X产品子类型（停车场的服务类型）
    */
    PackageItemType: number | 0
    /**
    参数串（每一种X产品权益计算的方式及参数等，服务端拼接，在创建订单服务中上传，比如优惠类型，优惠比例等）
    */
    ExtendString: string | null
}
interface FlightInterestPackageBasicInformation {
    /**
    权益包标题（例如：飞行家权益详情）
    */
    InterestTitle: string | null
    /**
    权益包生效时间
    */
    EffectDate: Date | null
    /**
    权益包到期时间
    */
    ExpiryDate: Date | null
    /**
    可优惠金额
    */
    TotalDiscountAmount: number | 0
    /**
    已经使用金额
    */
    ConsumeAmount: number | 0
    /**
    可优惠次数
    */
    TotalDiscountTimes: number | 0
    /**
    已经使用次数
    */
    ConsumeTimes: number | 0
    /**
    权益包Note信息列表
    */
    InterestNoteList: Array<FlightInterestPackageNoteInformation> | null
    /**
    权益包产品类型值（例如：旅行家（46）超级大卡（48））
    */
    PackageSubType: number | 0
}
interface FlightInterestPackageNoteInformation {
    /**
    Note类型
    */
    NoteType: number | 0
    /**
    note标题
    */
    Title: string | null
    /**
    Note内容
    */
    Content: string | null
}
interface FlightInlandPackageNewInformation {
    /**
    X产品大类（保险类X产品，服务类X产品）
    */
    PackageCategory: number | 0
    /**
    X产品推荐理由（未选择的情况下）（客户端展示）
    */
    PackageRecommendRemark: string | null
    /**
    X产品标记控制位
    */
    PackageFlagMap: number | 0
    /**
    X产品详细内容列表
    */
    PackageDetailInfo: Array<FlightInlandNewPackageDetailInformation> | null
}
interface FlightInlandNewPackageDetailInformation {
    /**
    X产品子类型
    */
    PackageSubType: number | 0
    /**
    X产品短名称（服务端配置，客户端展示用）
    */
    PackageShortName: string | null
    /**
    产品说明描述（客户端展示用）
    */
    PackageDescription: string | null
    /**
    X产品服务条款名称（客户端展示用）
    */
    PackageClauseName: string | null
    /**
    X产品服务条款查询Key（通过Key查询对应的条款内容）
    */
    PackageClauseKey: string | null
    /**
    X产品开关类型（服务端控制前端状态，客户端务必实现该功能）
    */
    PackageSwitchType: number | 0
    /**
    X产品开关客户端使用优先级控制
    */
    IsUseDefaultSwitch: boolean | null
    /**
    X产品购买限制信息
    */
    PackageSalePolicyInfo: Array<FlightInlandNewPackageSaleInformation> | null
    /**
    X产品推荐理由（客户端展示，服务端做配置）
    */
    PackageRecommendRemark: string | null
    /**
    X产品大Icon地址
    */
    PackageBigIconUrl: string | null
    /**
    X产品小Icon地址
    */
    PackageSmallIconUrl: string | null
    /**
    X产品推荐展示图片地址
    */
    PackageImageUrl: string | null
    /**
    X产品特色卖点信息列表
    */
    PackageFeatureList: Array<FlightInlandPacakgeFeatureInformation> | null
    /**
    X产品Note信息列表
    */
    PackageNoteList: Array<FlightPackageNoteItemInformation> | null
    /**
    X产品参数串（服务端拼接下发，客户端在下一个主服务上传）格式：
  {"SegmentNo":"0","PackageType":"22","PackageRelationType":"2"...}
    */
    PackageString: string | null
    /**
    附加产品标记位
    */
    PackageFlag: number | 0
    /**
    活动信息列表（主要是针对X产品的活动信息）（7.02）
    */
    PromotionList: Array<FlightPackagePromotionInformation> | null
}
interface FlightPackagePromotionInformation {
    /**
    活动类型（对应SOA字段DiscountMethod）
    */
    Type: number | 0
    /**
    活动单位（对应SOA字段DiscountUnit）
    */
    UnitType: number | 0
    /**
    活动享受金额（对应SOA字段DiscountPrice）
    */
    Price: number | 0
    /**
    活动份数
    */
    Count: number | 0
    /**
    活动内容信息列表
    */
    ContentList: Array<FlightXPromotionContentInformation> | null
    /**
    标识，位操作
    */
    FlagMap: number | 0
    /**
    活动备注信息
    */
    NoteList: Array<FlightXPromotionNoteInformation> | null
}
interface FlightXPromotionNoteInformation {
    /**
    信息类型
    */
    NoteType: number | 0
    /**
    信息标题
    */
    NoteTitle: string | null
    /**
    信息内容
    */
    NoteContent: string | null
}
interface FlightXPromotionContentInformation {
    /**
    活动内容索引（对应SOA字段DiscountProductType转换成服务下发对应的值）
    */
    PackageSubType: number | 0
}
interface FlightPackageNoteItemInformation {
    /**
    文案类型
    */
    NoteType: number | 0
    /**
    文案标题
    */
    NoteTitle: string | null
    /**
    文案内容
    */
    NoteContent: string | null
}
interface FlightInlandPacakgeFeatureInformation {
    /**
    X产品卖点类型（客户端根据类型区分显示）
    */
    FeatureType: number | 0
    /**
    X产品特色卖点内容
    */
    FeatureContent: string | null
}
interface FlightInlandNewPackageSaleInformation {
    /**
    行程编号
    */
    SegmentNo: number | 0
    /**
    X产品名称（服务端从SOA接口取，客户端展示在详情中）
    */
    PackageName: string | null
    /**
    X产品id
    */
    PackageID: string | null
    /**
    X产品Code
    */
    PackageCode: string | null
    /**
    乘客类型
    */
    PassengerType: BasicPassengerType | null
    /**
    最小购买数（最小数量）
    */
    MinCount: number | 0
    /**
    最大购买数
    */
    MaxCount: number | 0
    /**
    购买单位类型
    */
    UnitType: number | 0
    /**
    X产品售卖价格
    */
    SalePrice: number | 0
    /**
    X产品原始价
    */
    OriginalPrice: number | 0
    /**
    X产品多价格数量（停车场按天等）
    */
    Quantity: number | 0
    /**
    X产品规则ID
    */
    PackageRuleID: string | null
    /**
    X产品价格是否默认（对多价格要设置一个默认价格，单价格产品都是默认的，客户端展示价格时使用）
    */
    IsDefaultPrice: boolean | null
    /**
    X产品多价格特点（停车场价格特点，赠洗车）
    */
    PriceNoteList: Array<FlightPackagePriceInformation> | null
    /**
    X产品子类型（停车场的服务类型）
    */
    PackageItemType: number | 0
    /**
    X产品子类型默认项
    */
    IsPackageItemDefault: boolean | null
    /**
    产品透传字符串
    */
    PackageString: string | null
}
interface FlightPackagePriceInformation {
    /**
    X产品价格Note信息列表
    */
    NoteType: number | 0
    /**
    类型内容
    */
    NoteItem: string | null
}
interface FlightXProductCouponInformation {
    /**
    特权类型
    */
    Type: number | 0
    /**
    特权优惠券Code
    */
    Couponcode: string | null
    /**
    特权优惠金额
    */
    Deductionamount: number | 0
    /**
    优惠券使用类型
    */
    UnitType: number | 0
    /**
    优惠券策略条件（例如：一个优惠券Code可以对应多个X产品）
    */
    CouponPolicyInfo: Array<FlightCouponPolicyInformation> | null
}
interface FlightCouponPolicyInformation {
    /**
    行程编号（多程情况依次类推）
    */
    SegmentNo: number | 0
    /**
    X产品类型
    */
    XproductItemType: number | 0
}
interface FlightXProductConfirmPageNoteInformation {
    /**
    提示类型
    */
    NoteType: number | 0
    /**
    提示标题
    */
    NoteTitle: string | null
    /**
    提示内容（如果有换行，用\n来换行）
    */
    NoteContent: string | null
}
interface FlightXProductConfirmPageItemInformation {
    /**
    X产品类型
    */
    XProductTypeID: number | 0
    /**
    X产品价格信息
    */
    XProductPriceList: Array<FlightXProductConfirmPagePriceItemInfomation> | null
}
interface FlightXProductConfirmPagePriceItemInfomation {
    /**
    名称(前端展示用)
    */
    Name: string | null
    /**
    X产品ID（X产品Key）
    */
    XProductID: string | null
    /**
    X产品的Code（Package的唯一区分埋点使用）
    */
    ProductCode: string | null
    /**
    图片地址（带参数的URL，客户端根据自己的设备传递不同参数获取不同size的图片，android是480、720，IOS是640、960，地址带参数的格式http://xxx/960.jpg,客户端根据设备自行替换图片名称）（确认页大图标）
    */
    LogoImgURL: string | null
    /**
    行程类型
    */
    TripType: number | 0
    /**
    X产品扩展类型
    */
    ExtendType: number | 0
    /**
    X产品服务业务类型（主要供后续服务调用使用）
    */
    ServiceType: number | 0
    /**
    乘客类型
    */
    PassengerType: BasicPassengerType | null
    /**
    购买单位
    */
    UnitType: number | 0
    /**
    单位单价（初始值的单价也通过该字段下发，比如接送机初始价格）
    */
    UnitPrice: number | 0
    /**
    返回Json串（服务端拼接业务关系数据下发，客户端其他服务请求时带入，6.12直连接送机拼接是否直连类型）
    */
    ResponseJsonString: string | null
    /**
    X产品标记信息列表(接送机新版使用）
    */
    RemarkList: Array<FlightXProductConfirmPageRemarkInformation> | null
    /**
    附加产品的参数串（服务端拼接下发，客户端在下一个主服务上传）格式：
  {"SegmentNo":"0","PackageType":"22","PackageRelationType":"2"...}
    */
    PackageString: string | null
}
interface FlightXProductConfirmPageRemarkInformation {
    /**
    标题（Logo的URL，标题）(接送机新版使用）
    */
    Title: string | null
    /**
    内容（内容描述等）（例如：100%预约成功，保证新车，延迟等待）
    */
    Content: string | null
}
interface FlightConfirmPagePassengerInformation {
    /**
    乘客名称
    */
    PassengerName: string | null
    /**
    乘客类型(机票定义的乘客类型)
    */
    PassengerEType: BasicPassengerType | null
    /**
    生日
    */
    Birthday: Date | null
    /**
    证件类型
    */
    CardNewType: number | 0
    /**
    证件号码(从711后不再使用)
    */
    CardNumber: string | null
    /**
    证件有效期
    */
    IDCardTimelimit: Date | null
    /**
    性别
    */
    GenderEType: number | 0
}
interface FlightXProductConfirmPageExtendInformation {
    /**
    扩展信息类型
    */
    ExtendType: number | 0
    /**
    扩展参数信息
    */
    ExtendParams: string | null
}
enum BasicPassengerType {
    Unknow = 0,//未知
    Adult = 1,//成人
    Child = 2,//儿童
    Baby = 3,//婴儿
    Old = 4,//老人
}