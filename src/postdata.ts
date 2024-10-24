import { OG } from '@innoflex-technology/og-schema';

const projectId = "02158fba-ae81-4dc0-a0ed-dcb3328db369"
const projectKey = "63374ec2-5c01-4dea-9317-4ed368c50e50"

const client = new OG(projectId, projectKey);

let _post_cache:any;

export const posts = async () => {
    if (!_post_cache) {
        _post_cache = await client.ListRecords('blog_post');
    }
    return _post_cache.Items;
}

export const tags = async () => {
    if (!_post_cache) {
        _post_cache = await client.ListRecords('blog_post');
    }
    return [...new Set(_post_cache.Items.map((post:any) => post.tags).flat())]
}
