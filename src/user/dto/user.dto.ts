export class UserDto{
    slack_name: string
    current_Day: string
    utc_time: Promise<Date> | Date
    track: string
    github_file_url: string
    github_repo_url: string
    status_code: number
}