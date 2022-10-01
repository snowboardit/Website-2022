export interface IProject<T> {
    title: string,
    status: boolean,
    description: string,
    githubLink?: string,
    projectLink?: string,
    thumbnailUrl?: string,
    thumbnailAlt?: string,
    tags: string[],
    T: any
}

export interface IncomingProject {

}