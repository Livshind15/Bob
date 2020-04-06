export interface Environment {
    environmentName?: string;
    environmentDescription?: string;
    creationTime?: string;
    environmentUrl?: string;
    members?: {
        userName: string;
        fullName: string;
        avatarUrl: string;
    }[];
    monitors?: {
        type: string;
        value: string;
        unit: string;
    }[];
}
