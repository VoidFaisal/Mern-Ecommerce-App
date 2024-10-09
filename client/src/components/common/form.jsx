import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || ""

    switch (getControlItem.componentType) {
      case "input":
        element = (<Input
          name={getControlItem.name}
          type={getControlItem.type}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          value={value}
          onChange = {(event)=>setFormData({...formData,[getControlItem.name]:event.target.value,})}
        />);
        break;
      case "select":
        element = (<Select onValueChange = {(value)=>setFormData({...formData,[getControlItem.name]:value,})} value={value}>
          <SelectTrigger className="w-full">
          <SelectValue placeholder={getControlItem.placeholder}/>
          </SelectTrigger>
          <SelectContent>
            {
              getControlItem.options &&
              getControlItem.options.length > 0 ?
              getControlItem.option.map(optionItem=><SelectItem key={optionItem.id} value={optionItem.id}>{ptionItem.label}</SelectItem>):null
            }
          </SelectContent>
        </Select>);
        break;
      case "textarea":
        element = (<Textarea value={value}
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          onChange = {(event)=>setFormData({...formData,[getControlItem.name]:event.target.value,})}
        />);
        break;

      default:
        element = ( <Input value={value}
          name={getControlItem.name}
          type={getControlItem.type}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          onChange = {(event)=>setFormData({...formData,[getControlItem.name]:event.target.value,})}
        />);
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => {
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>;
        })}
        <div>
          <Button type="submit" className="mt-2 w-full">{buttonText|| "Submit"}</Button>
        </div>
      </div>
    </form>
  );
}

export default CommonForm;