import { Client, Storage } from "appwrite";
import conf from "../config/conf";

export class FileService {
    client = new Client();
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            
        } catch (error) {
            throw error;
        }
    }
}

const fileService = new FileService();

export default fileService;