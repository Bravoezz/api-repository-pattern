import { AppDataSource } from "../dataSource";
import { runSeeders } from "../seeders/DatabaseSeeder";

AppDataSource.initialize().then(_=>
{
    runSeeders();
});