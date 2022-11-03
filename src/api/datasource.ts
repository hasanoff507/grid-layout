export interface IDataSource {
    name: string;
    description: string;
}

export interface ICube {
    name: string;
    description: string;
}

export interface IView {
    name: string;
    Attributes: IAttribute[];
    Measures: IMeasure[];
}

export interface IAttribute {
    name: string;
    uniqueName: string;
}

export interface IMeasure {
    name: string;
    uniqueName: string;
}

export class DatasourceApi {
    public static getDataSources(): IDataSource[] {
        const result: IDataSource[] = [
            {
                name: 'Superstore',
                description: 'Standard Superstore database'
            },
            {
                name: 'FoodMartDW',
                description: 'Famous FoodMartDW database'
            },

        ];
        return result;
    }
    public static getCubes(dataSource: string): ICube[] {
        const superstore: ICube[] = [
            { name: 'Sales', description: 'Sales cube' },
            { name: 'Inventory', description: 'Inventory cube' },
        ];

        const foodmart: ICube[] = [
            { name: 'Warehouse', description: 'Warehouse cube' },
            { name: 'Geography', description: 'Geography cube' },
        ];


        if (dataSource === "Superstore") return superstore;
        else if (dataSource === "FoodMartDW") return foodmart;


        return superstore;
    }

    public static getView(cube: string): IView {
        const result: IView[] = [
            {
                name: 'Sales', Attributes:
                    [
                        { name: 'Product', uniqueName: '[Product]' },
                        { name: 'Date', uniqueName: '[Date]' },
                        { name: 'Geography', uniqueName: '[Quantity]' },
                    ],
                Measures: [
                    { name: 'Quantity', uniqueName: '[Quantity]' },
                    { name: 'Amount', uniqueName: '[Amount]' },
                ]
            },
            {
                name: 'Inventory', 
                Attributes:
                    [
                        { name: 'Inventory Order Date', uniqueName: '[Order Date]' },
                        { name: 'Inventory Ship Date', uniqueName: '[Ship Date]' },
                        { name: 'Inventory Region', uniqueName: '[Region]' },

                    ],
                Measures:
                    [
                        { name: 'Inventory Quantity', uniqueName: '[Quantity]' },
                        { name: 'Inventory Amount', uniqueName: '[Amount]' },
                    ]
            }
        ]
        if (cube === 'Sales') return result[0]
        else if (cube === 'Inventory') return result[1]
        return result[0];

    }
}