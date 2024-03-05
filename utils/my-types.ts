export type BlogArticleType = {
    id: string; //Primary Key
    slug: string;
    
    tag: string;
    image_name: string;
    translation_key: string;
};

export type ProjectType = {
    id: string; //Primary Key
    slug: string;
    
    translation_key: string;
    image_path: string;
    currentAmount: number;
    goalAmount: number;
};

export type Donation = {
    id: string; //Primary Key
    project_id: string; //Foreign Key
    donor_id: string; //Foreign Key
    stripe_payment_id: string;
    
    amount: number;
    message: string;
    
    currency: string;
    donation_date: string;
    payment_method: string;
    
    is_anonymous: boolean;
    is_from_organization: boolean;
    organization_name: string;
};

export type ProjectTranslationsType = {
    Donate: string;
    CardOption: string;
    BankTransferOption: string;
    DesiredAmount: string;
    Continue: string;
    DonateFor: string;
}

export type ContactTranslationType = {
    FormTitle: string;
    Disclaimer: string;
    Email: string;
    Phone: string;
    Address: string;
    WorkingHours: string;
    Name: string;
    YourMessage: string;
    Send: string;
    Success: string;
    Error: string;
};